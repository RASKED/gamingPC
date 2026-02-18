import React from 'react';
import { useParams } from 'react-router-dom';
import "../css/product.css"
import WideSection from '../elements/WideSection';

// Имитация базы данных (можно вынести в отдельный файл .json)
const PRODUCTS = {
  "1": {
    name: "GAMING PC INTEL POWER 1",
    price: "899.00 €",
    img: "https://via.placeholder.com/500", // Сюда вставьте ссылку на фото ПК
    description: "Мощный игровой компьютер для современных игр в 1080p и 1440p.",
    specs: {
      "CPU": "Intel Core i5-13400F",
      "GPU": "NVIDIA GeForce RTX 4060 8GB",
      "RAM": "16GB DDR4 3200MHz",
      "SSD": "1TB NVMe Gen4",
      "Case": "Deepcool Matrexx 55",
      "OS": "Windows 11 Pro"
    }
  }
};

export default function ProductPage() {
  const { productId } = useParams();
  const product = PRODUCTS[productId];

  // Если товар не найден в объекте PRODUCTS
  if (!product) {
    return <div style={{ padding: '100px', textAlign: 'center' }}><h2>Товар не найден 404</h2></div>;
  }

  return (
    <div className="product-page">
      <div className="product-main">
        {/* Левая часть - Фото */}
        <div className="product-gallery">
          <img src={product.img} alt={product.name} />
        </div>

        {/* Правая часть - Информация */}
        <div className="product-details">
          <span className="category-label">Игровые ПК</span>
          <h1>{product.name}</h1>
          <div className="price-tag">{product.price}</div>
          
          <div className="short-description">
            <p>{product.description}</p>
          </div>

          <button className="add-to-cart">Добавить в корзину</button>
          
          <div className="shipping-info">
            ✅ В наличии. Доставка 1-3 недели.
          </div>
        </div>
      </div>

      {/* Таблица характеристик (как на сайте) */}
      <div className="specs-container">
        <h3>Технические спецификации</h3>
        <table className="specs-table">
          <tbody>
            {Object.entries(product.specs).map(([key, value]) => (
              <tr key={key}>
                <td className="spec-name">{key}</td>
                <td className="spec-value">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <WideSection
        title="Мощные игровые решения"
        description="Наши компьютеры собраны из лучших комплектующих для максимальной частоты кадров в любых играх."
        image="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1000"
        imageSide="right"
      />
      <WideSection
        title="Мощные игровые решения"
        description="Наши компьютеры собраны из лучших комплектующих для максимальной частоты кадров в любых играх."
        image="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1000"
        imageSide="left"
      />
      <WideSection
        title="Мощные игровые решения"
        description="Наши компьютеры собраны из лучших комплектующих для максимальной частоты кадров в любых играх."
        image="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1000"
        imageSide="right"
      />
      <WideSection
        title="Мощные игровые решения"
        description="Наши компьютеры собраны из лучших комплектующих для максимальной частоты кадров в любых играх."
        image="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1000"
        imageSide="left"
      />
    </div>
  );
};
