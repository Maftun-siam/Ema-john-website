/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    const { img, ratings, name, seller, quantity, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5 className='product-name'>{name}</h5>
                <p className='product-price'>Price : ${price}</p>
                <p className='product-price'>Manufacturer : {seller} </p>
                <p className='product-price'>Rating : {ratings} </p>
                <p>hi</p>


            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to cart
                <FontAwesomeIcon icon={faCoffee} />
            </button>
        </div>
    );
};

export default Products;