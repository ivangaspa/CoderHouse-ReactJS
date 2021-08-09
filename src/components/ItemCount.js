import React, { useState} from "react";
import Button from "../components/Button";

export default function ItemCount(props) {
    const [articulo] = useState(props.articulo);
    const [count, setCount] = useState(0);
    const [stock] = useState(props.stock);

    const onAdd = () => {
        if(stock === 0) {
            alert("No hay stock suficiente para ese producto!");
            return;
        }
        if(count === 0) setCount(count + 1);

        alert("Productos agregados al carrito!");
    }

    return (
        <div className = "text-center mb-3 mx-1">
            <span className="mb-3 greyText">{articulo}</span>
            <div className="row mx-0 align-items-center">
                <div className="my-2 px-0 col-2">
                    <Button classProp="buttonAdd" text="+" handleCounter={() => setCount(stock > count? count + 1 : count + 0)} />
                    <span className="px-2">{count}</span>
                    <Button classProp="buttonRem" text="-" handleCounter={() => setCount(count === 0? count - 0 : count - 1)} />
                </div>
                <button className="my-2 ps-4 col-3 cartButton" onClick={onAdd}><i className="fas fa-cart-plus"></i></button>
                <h6 className="my-2 greyText col-7">({stock} disponibles)</h6>
            </div>
        </div>
    );
}
