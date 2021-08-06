import React, { useState} from "react";
import Button from "../components/Button";
import "../styles/ItemCount.css";

export default function ItemCount(props) {
    const [articulo] = useState(props.articulo);
    const [count, setCount] = useState(0);
    const [stock] = useState(props.stock);

    const onAdd = () => {
        if(stock === "0") {
            alert("No hay stock suficiente para ese producto!");
            return;
        }
        if(count === 0) setCount(count + 1);

        alert("Productos agregados al carrito!");
    }

    return (
        <div className = "text-center my-4 mx-2 border articulo" >
            <h3 className="mt-3">{articulo}</h3>
            <h4 className="mb-4">Stock: {stock}</h4>

            <Button text="➖" handleCounter={() => setCount(count === 0? count - 0 : count - 1)} />
            <span>Cantidad: {count}</span>
            <Button text="➕" handleCounter={() => setCount(stock > count? count + 1 : count + 0)} />
            <button className="my-3 px-4" onClick={onAdd}>Agregar al carrito</button>
            
        </div>
    );
}
