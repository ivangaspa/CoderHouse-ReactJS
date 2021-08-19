import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "../styles/Index.css";


export default function ProductCard({product : {id, name, image, price, description, product, stock}}) {

    return (
        <>
            <div className="border my-2 mx-2 productDemo text-center">
                <Link className="linkInheritStyle" to={`/item-details/${id}`}>
                    <p className="mt-2">{name}</p>
                    <p>${price}</p>
                    <img src={image} alt={product} className="productImg mb-2 img-fluid"/>
                </Link>
                <ItemCount articulo={product} stock={stock}/>
            </div>
        </>
    );
}
