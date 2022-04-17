import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const navigate=useNavigate()
        const { cart } = props;
        let shipping = 0
         let total = 0
         for(const product of cart){
             total=total + product.price;
            shipping= shipping + product.shipping
            }
            const tax =(total * 0.1).toFixed(2)
            const grandTotal = total + shipping + parseFloat(tax) 
    return (
        <div className='cart'>
             <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p> 
                <p>Total Price:$ {total}</p>
                <p>Total Shipping:$ {shipping}</p>
                <p>Tax: {tax}</p>
                <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
                <button onClick={()=>navigate('/shipment')}>Proceed Shipment</button>
        </div>
    );
};

export default Cart;