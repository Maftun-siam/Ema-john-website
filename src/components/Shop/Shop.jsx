/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';




const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product)=>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(product => <Products 
                        key={product.id}
                        handleAddToCart = {handleAddToCart}
                        product={product}
                        ></Products>)
                }
            </div>

            <div className="cart-container">
                <h2>Order summery</h2>
                <p>Selected item : {cart.length} </p>
            </div>

        </div>
    );
};

export default Shop;