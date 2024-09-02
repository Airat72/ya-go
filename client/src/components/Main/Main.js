import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    const feedback = Object.fromEntries(formData);

    try {
      const response = await fetch('https://ya-go-backend.onrender.com/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
        body: JSON.stringify(feedback),
      });

      if (response.ok) {
        alert('Успешно отправлено!');
        setShowModal(false);
      } else {
        alert('Ошибка при отправке!');
      }
    } catch (error) {
      console.error(error);
      alert('Ошибка при отправке!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="main-container">
      <div className="text-container">
        <h1>Ваш бизнес ассистент</h1>
        <p>«Ya-Go» разработка и продвижение сайтов</p>
        <div className="button-container">
          <a href="tel:+79672227733" className="call-btn" style={{ textDecoration: 'none' }}>
            Позвонить
          </a>
          <button className="request-btn" onClick={() => setShowModal(true)}>
            Оставить заявку
          </button>
        </div>
      </div>
      <img src="heroImage.png" alt="Картинка" className="main-image" />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Имя:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="phone">Телефон:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div>
                <label htmlFor="message">Сообщение:</label>
                <textarea name="message" id="message" rows="10" required></textarea>
              </div>
              <button type="submit">{isSubmitting ? 'Идет отправка...' : 'Отправить'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;








