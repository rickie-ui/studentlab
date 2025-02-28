import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = "+254717694466";
  const message = "Hello! I'm interested in your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      <div
        className={`relative mb-6 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg text-sm transition-opacity duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        Chat with us!
        <div className="absolute right-3 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default Contact;
