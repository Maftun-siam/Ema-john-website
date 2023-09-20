/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'
const Cart = ({cart}) => { // option 2 
    // const {cart} = props; option 1

    console.log(cart);

    let total= 0;
    let totalShipping = 0;
    let tax = 0;
    for( const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;

        tax = total * 7/100;

    }
    const grandTotal = total + tax + totalShipping
    return (
        <div className="cart-container">
             <h2>Order summery</h2>
             <p>Selected item : {cart.length} </p>
             <p>Total price :  ${total}</p>
             <p>Total Shipping : {totalShipping} </p>
             <p>tax : {tax} </p>
             <h6>Grand Total : {grandTotal} </h6>
        </div>
    );
};

export default Cart;