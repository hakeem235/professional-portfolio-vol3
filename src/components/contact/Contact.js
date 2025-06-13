import { useState } from "react";
import "./contact.scss";
import shake from "../../assets/shake.svg";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="Handshake illustration" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" aria-label="Email" />
          <textarea placeholder="Message" aria-label="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I&apos;ll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
