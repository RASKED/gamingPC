import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './elements/header';
import Main from './pages/main';
import Footer from './elements/footer';
import ProductPage from './pages/product';

function App() {
  return (
    
      <div className="App">
        <Header />
        


        <Routes>
          {/* Главная */}
          <Route path="/" element={<Main />} />
          
          {/* Страница товара. Важно: :productId — это имя переменной */}
          <Route path="/products/:productId" element={<ProductPage />} />
          
          {/* Если ввели несуществующий адрес */}
          <Route path="*" element={<h1>404: Страница не найдена</h1>} />
        </Routes>

        <Footer />
      </div>
   
  );
}

export default App;