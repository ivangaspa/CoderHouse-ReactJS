import React, { useState, useEffect} from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function ItemCount(props) {
    const [articulo, setArticulo] = useState(props.articulo);
    const [count, setCount] = useState(props.initial);
    const [stock, setStock] = useState(props.stock);
    const [finishState, setFinishState] = useState(false);

    const onAdd = () => {
        if(stock === 0) {
            alert("No hay stock suficiente para ese producto!");
            return;
        }
        if(count === 0) setCount(count + 1);
        setFinishState(true);
        // alert("Productos agregados al carrito!");
    }

    const goToCart = () => {
        setFinishState(false);
    }


    useEffect(() => {
        setArticulo(props.articulo);
        setStock(props.stock);
        setCount(props.initial);
    }, [props.stock, props.articulo, props.initial]);

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
                {finishState === true &&  <Link to={`/cart`}><button onClick={goToCart} className="col-8 finishButton mx-auto">Terminar compra</button></Link>}
            </div>
        </div>
    );
}
