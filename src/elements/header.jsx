import '../css/header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <span className="logo-main">Game</span>
          <span className="logo-accent">PC</span>
        </div>

        <nav className="nav">
          <a href="#">PC сборки</a>
          <a href="#">Комплектующие</a>
          <a href="#">Ноутбуки</a>
          <a href="#">Мониторы</a>
          <a href="#">Контакты</a>
        </nav>

        <div className="header-actions">
          <div className="lang-switch">
            <span className="active">RU</span>
            <span>EE</span>
          </div>

          <div className="phone">@GamePCmenedher</div>

          <button className="cart-btn">
            🛒 <span>0</span>
          </button>
        </div>
      </div>
    </header>
  );
}