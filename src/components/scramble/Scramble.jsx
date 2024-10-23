import React, { useState, useEffect } from "react";
import './Scramble.css';  // Import the CSS file

const ScrambleText = ({ children }) => {
  const extractUniqueLetters = (text) => {
    const uniqueLetters = new Set(text.toUpperCase().replace(/[^A-Z]/g, ''));
    return Array.from(uniqueLetters);
  };

  const [text, setText] = useState(children);
  const [scrambling, setScrambling] = useState(false);
  const letters = extractUniqueLetters(children);

  const scrambleText = () => {
    let iteration = 0;
    const originalText = children;

    const performScramble = () => {
      setText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration += 1/6;
      if (iteration >= originalText.length) {
        setText(originalText);
        setScrambling(false); // Stop scrambling after complete
      } else {
        requestAnimationFrame(performScramble);
      }
    };

    performScramble();
  };

  useEffect(() => {
    scrambleText(); // Scramble text once on load
  }, []);

  const handleMouseEnter = () => {
    if (!scrambling) {
      setScrambling(true);
      scrambleText(); // Scramble text on hover
    }
  };

  return (
    <div className="gli-main-heading" onMouseEnter={handleMouseEnter}>
      <div className="gli-content">
        <div className="gli-h1" data-value={children}> {text} </div>
        <div className="gli-h1" data-value={children}> {text} </div>
      </div>
    </div>
  );
};

export default ScrambleText;
