import React from 'react';
import "../styles/Index.css";
import { useState,useEffect } from 'react';
import jsonProducts from "../data/products.json";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function ItemDetailContainer() {
    
    const [itemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { productGroup } = useParams();

    const getItems = async () => {
        return new Promise((resolve, reject) => {
            
            setTimeout(() => resolve(jsonProducts[productGroup][id]), 1000);
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
            <Loading />
        );
    }

    return (
        <div className="row mx-auto container-fluid justify-content-center">
            <ItemDetail item = {itemDetail} group= {productGroup}/>
        </div>
    ) 
}