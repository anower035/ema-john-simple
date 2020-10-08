import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';

import Products from '../Products/Products';
import './Shops.css'

const Shops = () => {
    const first10=fakeData.slice(0,10)
    const [product,setProduct]=useState(first10)
    const [cart,setCart]=useState([])
    const handleProduct= (product) =>{
        const newCart=[...cart,product]
        setCart(newCart);
    }
    return (
        <div className='Shops-container'>
           <div className="product-container">
                    {
                        product.map(item =><Products
                            handleProduct={handleProduct}
                             items={item}>

                             </Products>)
                    }
           </div>
           <div className="cart-container">
                    <Cart cart={cart}></Cart>
           </div>

        </div>
    );
};

export default Shops;