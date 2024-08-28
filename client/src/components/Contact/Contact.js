import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container" id="contacts">
      <h1 className="contact-title">Наши контакты</h1>
      <div className="contact-info">
        <p className="contact-phone">Телефон: +7-967-222-77-33</p>
        <p className="contact-email">Email: ya-go-it@mail.ru</p>
      </div>
    </div>
  );
}

export default Contact;