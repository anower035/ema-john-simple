import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';
import { Link } from 'react-router-dom';


const Products = (props) => {
    // console.log(props)
    const {img ,name,seller,price,stock,key}=props.items
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className='product-name'><Link to={'/product/'+key}>{name}</Link></h4>
                <br/>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock-Order soon</small></p>
                {props.showAddToCart === true && <button className='main-button' onClick={() => props.handleProduct(props.items)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
            </div>  
        </div>
    );
};

export default Products;