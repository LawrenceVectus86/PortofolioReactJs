import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const IconToTop = () => { // Changed function name to IconToTop

  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk menangani scrolling
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk kembali ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} style={buttonStyle} className="backdrop-blur-lg rounded-xl">
           <FaArrowUp className="w-10 h-10" />
        </button>
      )}
    </div>
  );
}

const buttonStyle = {
  position: "fixed",
  bottom: "40px",
  right: "40px",
  padding: "10px 20px",
  fontSize: "16px",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

export default IconToTop;