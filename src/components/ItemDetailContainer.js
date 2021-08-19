import React from 'react';
import "../styles/Index.css";
import { useState,useEffect } from 'react';
import jsonProducts from "../data/products.json";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    
    const [itemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const id = useParams();

    const getItems = async () => {
        return new Promise((resolve, reject) => {
            
            setTimeout(() => resolve(jsonProducts[id.id]), 1000);
        })
    };
    
    getItems().then((dataResolve) => {
        setItemDetail(dataResolve);
        setLoading(false);
    }).catch(error => console.log(error));

    useEffect(() => {
        getItems();
    });

    if (loading) {
        return (
        <div className="text-center mt-5">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        )
    }

    return (
        <div className="row mx-auto container-fluid justify-content-center">
            <ItemDetail item = {itemDetail}/>
        </div>
    ) 
}