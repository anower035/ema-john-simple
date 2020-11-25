import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import {Link} from 'react-router-dom';

import Products from '../Products/Products';
import './Shops.css'

const Shops = () => {
    const first10=fakeData.slice(0,10)
    const [product,setProduct]=useState(first10)
    const [cart,setCart]=useState([])
    
    useEffect(() =>{
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);
        const previousCart=productKeys.map(existingkey =>{
          const product=fakeData.find(pd => pd.key === existingkey)
          product.quantity=savedCart[existingkey]
          return product;
        })
        setCart(previousCart) 
    },[])



    const handleProduct= (product) =>{
        const toBeAdded=product.key
        const sameProduct=cart.find(pd => pd.key === toBeAdded)
        let count = 1
        let newCart
        if(sameProduct){
            count=sameProduct.quantity+1;
            sameProduct.quantity=count;
            const others=cart.filter(pd => pd.key !== toBeAdded)
            newCart=[...others,sameProduct]
        }
        else{
            product.quantity=1
            newCart=[...cart,product]
        }
        setCart(newCart);

        addToDatabaseCart(product.key,count);
    }
    return (
        <div className='Shops-container'>
           <div className="product-container">
                    {
                        product.map(item =><Products
                            key={item.key}
                            showAddToCart={true}
                            handleProduct={handleProduct}
                             items={item}>

                             </Products>)
                    }
           </div>
           <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className='main-button'>Product Review</button>
                        </Link>
                    </Cart>
           </div>

        </div>
    );
};

export default Shops;