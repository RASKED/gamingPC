import React from "react";
import "../css/main.css";
import Product from "../elements/product";



export default function Main() {
return (
<div className="page">
<h1 className="title">Игровые компьютеры</h1>


<div className="screen">
{/* Filters */}
<aside className="filters">
<h3 className="filters-title">Фильтры</h3>
<div className="filter-item">Процессор</div>
<div className="filter-item">Видеокарта</div>
<div className="filter-item">Оперативная память</div>
<div className="filter-item">Цена</div>
</aside>


{/* Products */}
<main className="products">
<Product name="Gaming PC" price={999} />
<Product name="Gaming PC Pro" price={1299} />
<Product name="Gaming PC Ultra" price={1799} />
</main>
</div>
</div>
);
}