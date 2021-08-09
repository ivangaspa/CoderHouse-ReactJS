import React from "react";
import ItemCount from "./ItemCount";

export default function ProductCard({product : {id, name, image, price, description, product, stock}}) {

    return (
        <>
            <div className="border my-2 mx-2 productDemo text-center">
                <p className="mt-2">{name}</p>
                <p>${price}</p>
                <img src={image} alt={product} className="productImg mb-2 img-fluid"/>
                <ItemCount articulo={product} stock={stock}/>
            </div>
        </>
    );
}
