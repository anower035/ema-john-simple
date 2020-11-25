import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import'./ProductDetails.css';


const ProductDetails = () => {
    const{productKey}=useParams();
    const item=fakeData.find(pd => pd.key === productKey)
    console.log(item)
    return (
        <div className='ProductDetails'>
            <h1>Your Product Details</h1>
            <Products items={item} showAddToCart={false}></Products>
        </div>
    );
};

export default ProductDetails;