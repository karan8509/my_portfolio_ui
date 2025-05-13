import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../style/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !textarea) {
      toast.error("Please fill all fields");
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("https://my-portfolio-server-beta-ruddy.vercel.app/userSend", {
        name,
        email,
        message: textarea, // ✅ send correct key
      }); 
      console.log("---->" , response)
      if (response.status === 200) {
        toast.success("Your Data Sent Successfully");
        setName("");
        setEmail("");
        setTextarea("");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error while sending form:", error);
      toast.error("Failed to send data");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <h2 className="title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Enter Your Message"
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
              />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
