import { useState, useEffect } from "react";
import "../assets/css/Typewriter.css"; // Importa el CSS correctamente

const Typewriter = () => {
  const words = ["Developer", "Freelancer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout = setTimeout(() => {
      if (!isDeleting) {
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de borrar
        }
      } else {
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <div className="typewriter">
      <span className="text">{words[wordIndex].substring(0, charIndex)}</span>
      <span className="cursor">|</span> {/* Cursor como texto */}
    </div>
  );
};

export default Typewriter;


