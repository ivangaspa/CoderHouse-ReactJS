import React from 'react';
import "../styles/Index.css";
import ProductCard from './ProductCard';

export default function ItemListContainer(props) {

    return (
        <>
            <p className = "mt-4 text-center greetingStyle">"Bienvenido a Brewed Beans! En esta tienda encontrará una gran variedad de productos para los amantes del Café"</p>
            
            <div className="row mx-auto container-fluid justify-content-center">
                {
                    props.products.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </>
    ) 
}