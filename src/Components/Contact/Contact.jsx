import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contactus" id="contact">
      <h1>Contact Us</h1>
      <p>Contact us with your ideas amd requirements will contact you soon.</p>
  
        <form action="https://formspree.io/f/xvgpknlo" method="POST">
        <div className="form-details">
          <div className="name">
            <input type="text" required placeholder="Name" name="name"/>
          </div>
          <div className="contact-details">
            <div className="email">
              <input type="text" required placeholder="E-mail" name="email"/>
            </div>
            <div className="number">
              <input type="text" required placeholder="Number" name="number"/>
            </div>
          </div>

          <div className="message">
            <textarea placeholder="Type your message..."></textarea>
          </div>
        </div>
        <button className="button">Send</button>
        </form>

      
      <div className="social-copyright">
          © 2024 SenttllmentaAI. All Rights Reserved
      </div>
    </div>
  );
};

export default Contact;
