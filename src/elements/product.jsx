import React from "react";
import "../css/main.css";


export default function Product({ name, price }) {

    function click(){
        window.location.href = "/gamingPC/products/1"

    }

return (
<div className="product-card" onClick={()=>click()}>
<div className="product-image" />
<div className="product-name">{name}</div>
<div className="product-price">{price} €</div>
</div>
);
}