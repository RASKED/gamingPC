import React from 'react';
import "../css/product.css"


const WideSection = ({ title, description, image, imageSide = 'right' }) => {
  // Определяем стиль: если 'left', то реверсируем направление flex-контейнера
  const sectionStyle = {
    flexDirection: imageSide === 'left' ? 'row-reverse' : 'row'
  };

  return (
    <div className="wide-section" style={sectionStyle}>
      {/* Блок с текстом */}
      <div className="content-half">
        <div className="text-wrapper">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      {/* Блок с картинкой */}
      <div className="image-half" style={{ backgroundImage: `url(${image})` }}>
        {/* Картинка задана фоном для лучшего заполнения (object-fit) */}
      </div>
    </div>
  );
};

export default WideSection;