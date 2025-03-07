import React, { useState } from "react";
import "../assets/css/ContactPages.css";

const ContactPages = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mnnjerzl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Mensaje enviado con éxito. ¡Gracias por contactarme!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("Hubo un error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch (error) {
      setErrorMessage("Error de conexión. Revisa tu conexión a internet.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-page-background" id="contact">
      <div className="contact-container">
        <h1>Contacto</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
  
          <button type="submit" className="btn-submit">Enviar</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactPages;

