import React from 'react';
import "../styles/Index.css";

export default function CartWidget() {
    return (
        <>
            <div className="cartStyle">
                <i className="fas fa-shopping-cart me-2"></i>
                {/* <span className="badge rounded-pill badge-notification bg-danger badgeAbs">5</span> */}
            </div>  
        </>
    ) 
}