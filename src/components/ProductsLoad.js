import { useState, useEffect } from 'react';
import Loading from "../components/Loading";
import jsonProducts from "../data/products.json";
import ItemListContainer from './ItemListContainer';
import { useParams } from "react-router-dom";

export default function ProductsLoad() {

    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productGroup } = useParams();

    const getItems = async () => {
        return new Promise((resolve, reject) => {
            
            setTimeout(() => resolve(jsonProducts[productGroup]), 2000);
        })
    };
    
    getItems().then((dataResolve) => {
        setProductsList(dataResolve);
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
        <>
            <ItemListContainer products={productsList} />
        </>
    );
}
