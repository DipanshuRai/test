import React, { useState, useEffect } from "react";

const ScrambleText = ({ children }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [text, setText] = useState(children);

  useEffect(() => {
    let interval = null;

    const handleMouseOver = (event) => {
      let iteration = 0;
      const originalText = event.target.dataset.value;

      clearInterval(interval);

      interval = setInterval(() => {
        setText((prevText) =>
          prevText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1/3;
      }, 70);
    };

    const element = document.querySelector(".scramble-text");
    element.addEventListener("mouseover", handleMouseOver);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };
  }, [children, letters]);

  return (
    <span
      className="scramble-text"
      data-value={children}
      style={{ cursor: "pointer" }}
    >
      {text}
    </span>
  );
};

export default ScrambleText;
