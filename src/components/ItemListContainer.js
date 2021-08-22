import React from 'react';
import "../styles/Index.css";
import ProductCard from './ProductCard';

export default function ItemListContainer(props) {

    return (
        <>
            <div className="row mt-4 mx-auto container-fluid justify-content-center">
                {
                    props.products.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </>
    ) 
}