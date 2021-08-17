import React from 'react';
import "../styles/Index.css";
import { useState,useEffect } from 'react';
import jsonProducts from "../data/products.json";
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer(props) {
    
    const [itemDetail, setItemDetail] = useState([]);
    const index = parseInt(props.id);

    const getItems = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(jsonProducts[index]), 2000)
        })
    };
    
    getItems().then((dataResolve) => {
        setItemDetail(dataResolve);
    }).catch(error => console.log(error));

    useEffect(() => {
        getItems();
    });

    return (
        <div className="row mx-auto container-fluid justify-content-center">
            <ItemDetail item = {itemDetail}/>
        </div>
    ) 
}