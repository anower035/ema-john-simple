import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import './Shops.css'

const Shops = () => {
    const first10=fakeData.slice(0,10)
    const [product,setProduct]=useState(first10)
    return (
        <div className='Shops-container'>
           <div className="product-container">
                    {
                        product.map(item =><Products items={item}></Products>)
                    }
           </div>
           <div className="cart-container">
               <h1>This is cart container</h1>
           </div>

        </div>
    );
};

export default Shops;