import React from 'react';
import "../styles/Index.css";
import ItemCount from './ItemCount';

export default function ItemListContainer () {
    return (
        <>
            <p className = "mt-4 text-center greetingStyle">"Bienvenido a Brewed Beans! En esta tienda encontrará una gran variedad de productos para los amantes del Café"</p>
            <div className="row container">
                <ItemCount articulo="Artículo 1" stock="10" />
                <ItemCount articulo="Artículo 2" stock="3" />
                <ItemCount articulo="Artículo 3" stock="0" />
                <ItemCount articulo="Artículo 4" stock="5" />
            </div>
        </>
    ) 
}