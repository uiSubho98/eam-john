import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const{name,img,seller,ratings,price}=props.product;
    return (
        <div className='product'>
           <img src={img} alt=""></img>
          <div className='product-info'>
          <p className='product-name'>{name}</p>
           <p>Price: $ {price}</p>
           <p>Seller: {seller}</p>
           <p>Rating: {ratings}stars</p>
          </div>
          <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart' >
              <p className='btn-text'>Add To Cart</p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              </button>
        </div>
    );
};

export default Product;