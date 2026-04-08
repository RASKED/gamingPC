import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Используем HashRouter для GitHub
import Header from './elements/header';
import Footer from './elements/footer';
import Main from './pages/main';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    
      <div className="App">
        <Header />
        <Routes>
          {/* Главная - только по адресу / */}
          <Route path="/" element={<Main />} />
          
          {/* Страница товара - ТОЛЬКО по адресу /product/... */}
          <Route path="/products/:productId" element={<ProductPage />} />
          
          {/* 404 - если адрес не совпал */}
          <Route path="*" element={<h1>Страница не найдена</h1>} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;