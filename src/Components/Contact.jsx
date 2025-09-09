
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7my0l06",   // service ID from EmailJS 
        "template_fllqlop",  // template ID from EmailJS 
        form.current,
        "922cYFUIXn37oLNaA"  // public key from EmailJS 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-[60vw] mx-auto mt-10 
                 bg-gray-100 dark:bg-[#2F363B] 
                 p-10 rounded-2xl shadow-lg 
                 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-6 
                     text-gray-800 dark:text-gray-100 
                     transition-colors duration-300">
        Let's Connect
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-3 rounded-md 
                     bg-white dark:bg-[#1F3A4B] 
                     text-gray-800 dark:text-white 
                     outline-none border border-gray-300 dark:border-gray-600 
                     transition-colors duration-300"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md 
                     bg-white dark:bg-[#1F3A4B] 
                     text-gray-800 dark:text-white 
                     outline-none border border-gray-300 dark:border-gray-600 
                     transition-colors duration-300"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-md 
                     bg-white dark:bg-[#1F3A4B] 
                     text-gray-800 dark:text-white 
                     outline-none border border-gray-300 dark:border-gray-600 
                     transition-colors duration-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 
                     py-3 rounded-md font-semibold 
                     text-white hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
