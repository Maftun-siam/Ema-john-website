/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';




const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }


    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        product={product}
                    ></Products>)
                }
            </div>

            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;