import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
                <button className='main-button' onClick={() => props.handleProduct(props.items)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>  
        </div>
    );
};

export default Products;