import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hook/useCart';
import useProducts from '../Hook/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products,setProducts] = useProducts()
    const [cart,setaCart] = useCart(products);
    const handleRemoveProduct = (product) =>{
        const rest = cart.filter(pd=>pd.id !== product.id)
        setaCart(rest)
        removeFromDb(product.id)
    }
    const navigate = useNavigate()
    return (
        <div className="shop-container">
            <div className="review-items-container">
            {
                cart.map(product => <ReviewItem key={product.id}product={product} handleRemoveProduct={handleRemoveProduct}
                ></ReviewItem>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={()=>navigate('/inventory')}>Proceed Checkout</button>
                </Cart>

            </div>
        </div>
    );
};

export default Orders;