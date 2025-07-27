import "./ContactMe.css";
import { useState } from "react";
import Lottie from "lottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Footer() {
  const [form, setform] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!", form);
  };
  return (
    <section id="contact" className="contact-me flex">
      <DotLottieReact className="DotLottieReact"
        src="https://lottie.host/2b145407-2bb9-4e4a-868b-a37d8cb9f940/jGB6jSeNi8.lottie"
        loop
        autoplay
      />
      <div className="right-side flex">
        <div className="message-contact-me flex">
          <ion-icon name="mail" />
          <h2 className="contact">Contact Me</h2>
        </div>
        <p className="contact-dis">
          Contact me for more information and Get notified when I publish
          something new.
        </p>
        <div className="form-container flex">
          <form onSubmit={handleSubmit} className="contact-form flex">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              autoComplete="off"
              required
            ></textarea>
            <button type="submit"> Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
