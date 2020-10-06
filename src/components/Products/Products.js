import React from 'react';
import './Products.css';
const Products = (props) => {
    const {img ,name,seller,price,stock}=props.items
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br/>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock-Order soon</small></p>
            </div>  
        </div>
    );
};

export default Products;