import '../css/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-section">
            <div className="logo footer-logo">
              <span className="logo-main">Game</span>
              <span className="logo-accent">PC</span>
            </div>
            <p className="footer-description">
              Создаем лучшие игровые системы для профессионалов и любителей.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Навигация</h4>
            <nav className="footer-links">
              <a href="#">PC сборки</a>
              <a href="#">Комплектующие</a>
              <a href="#">Доставка</a>
              <a href="#">Гарантия</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Контакты</h4>
            <div className="footer-contacts">
              <p>📍 Таллинн, Эстония</p>
              <p>📞 +372 0000 0000</p>
              <p>✉️ info@gamepc.ee</p>
            </div>
            <div className="social-icons">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">TG</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="payment-methods">
            <span>VISA</span>
            <span>MasterCard</span>
            <span>Swedbank</span>
          </div>
          <p>&copy; {new Date().getFullYear()} GamePC OÜ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}