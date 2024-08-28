import React from 'react';
import './Works.css';

function Works() {
  return (
    <div className="works-container">
      <h1 className="works-title" id="about">Виды работ</h1>
      <div className="works-list">
        <div className="work-item">
          <h2 className="work-title">Frontend разработка</h2>
          <p className="work-description">Создание внешнего интерфейса веб-сайта</p>
        </div>
        <div className="work-item">
          <h2 className="work-title">Backend разработка</h2>
          <p className="work-description">Программная логика сайта</p>
        </div>
        <div className="work-item">
          <h2 className="work-title">SEO продвижение</h2>
          <p className="work-description">Поисковая оптимизация</p>
        </div>
      </div>
    </div>
  );
}

export default Works;

