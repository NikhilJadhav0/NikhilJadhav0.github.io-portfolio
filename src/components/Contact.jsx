import React, { useRef, useState } from 'react';
import { sendEmail } from '../utils/sendEmail';
import '../styles/components.css';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await sendEmail(formRef);
      setStatus('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-intro">
        If you'd like to collaborate, have questions, or just want to say hi — drop me a message!
      </p>

      <div className="contact-details">
        <p>
          📧 Email:{" "}
          <a href="mailto:nikhiljadhav2218@gmail.com">nikhiljadhav2218@gmail.com</a>
        </p>
        <p>
          💻 GitHub:{" "}
          <a
            href="https://github.com/NikhilJadhav0"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/NikhilJadhav0
          </a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/nikhil-jadhav-213275240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/nikhil-jadhav-213275240
          </a>
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit" className="btn">Send Message</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
