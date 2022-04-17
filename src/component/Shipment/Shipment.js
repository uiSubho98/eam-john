import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth)
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [name,setName]=useState('')
    const [error,setError] = useState('');


const handleNameBlur=(event)=>{
    setName(event.target.value)
}
const handleAddressdBlur= event =>{
    setAddress(event.target.value)
}
const handlePhoneBlur= event =>{
    setPhone(event.target.value)
}


const handleCreateUser=event =>{
    event.preventDefault();
    const shipping={name,address,phone,email}
    console.log(shipping)


}



    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleCreateUser}>
        <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input value={user?.email} readOnly type="email" name="" id=""  required />
        </div>
        <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input onBlur={handleNameBlur} type="text" name="" id=""  required />
        </div>
        <div className="input-group">
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddressdBlur} type="text" name="password" id="" required/>
        </div>
        <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
        </div>
        <p style={{color:'red'}}>{error}</p>
        <input type="submit" value="Add Shipping" className='form-submit' />
        </form>
        </div>
    </div>
    );
};

export default Shipment;