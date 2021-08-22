import React from "react";
import { Link } from 'react-router-dom';

export default function ItemDetail({item : {id, name, image, price, description, product}, group}) {

    return (
        <>
            <div className="border my-4 mx-1 itemDetail text-center row justify-content-evenly">
                <h5 className="nav-link link-dark mt-3 col-12">{name}</h5>
                <img src={image} alt={product} className="col-6 productImg my-4 mx-2 img-fluid border"/>
                <div className="col-5 mt-5">
                    <h6>Descripción:</h6>
                    <p className="py-2">{description}</p>
                    <h3 className="link-primary">${price}</h3>
                </div>
                <Link className="nav-link text-start col-9" to={`/products/${group}`}><i className="fas fa-reply"></i> Volver a productos</Link>
                
            </div>
        </>
    );
}
