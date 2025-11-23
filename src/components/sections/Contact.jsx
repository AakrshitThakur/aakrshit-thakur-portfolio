import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // send email to using emailjs service
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KET
      )
      .then((result) => {
        alert("Message Sent!", result);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="h-[75vh] w-full flex justify-center items-center">
      <RevealOnScroll className="w-full max-w-lg">
        <div className="mx-auto space-y-3 sm:space-y-4 md:space-y-5">
          <h2 className="text-[#605dff] text-3xl sm:text-4xl font-bold text-center">GET IN TOUCH</h2>
          <form className="space-y-5 text-sm sm:text-base" onSubmit={handleOnSubmit}>
            {/* name-field */}
            <div className="color-base-300 color-base-content overflow-hidden rounded-lg">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                className="w-full px-5 py-3 transition focus:outline-none"
                placeholder="John Doe"
                required={true}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            {/* email-field */}
            <div className="color-base-300 color-base-content overflow-hidden rounded-lg">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full px-5 py-3 transition focus:outline-none"
                placeholder="example@example.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            {/* message-textbox */}
            <div className="color-base-300 color-base-content overflow-hidden rounded-lg">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full px-5 py-3 transition focus:outline-none"
                placeholder="Enter your message here..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            {/* submit-btn */}
            <button
              type="submit"
              className="color-success color-success-content w-full py-3 px-5 rounded-lg font-medium transition overflow-hidden cursor-pointer hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
