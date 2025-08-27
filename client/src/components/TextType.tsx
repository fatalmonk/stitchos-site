import React, { useState, useEffect } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = ""
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const fullText = text[currentTextIndex];
      
      if (currentText.length < fullText.length) {
        // Continue typing
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing current text, pause then move to next
        setIsTyping(false);
        timeout = setTimeout(() => {
          setCurrentText("");
          setCurrentTextIndex((prev) => (prev + 1) % text.length);
          setIsTyping(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, text, typingSpeed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;

    const blinkInterval = setInterval(() => {
      setShowCursorBlink((prev) => !prev);
    }, 530);

    return () => clearInterval(blinkInterval);
  }, [showCursor]);

  return (
    <span className={className}>
      {currentText}
      {showCursor && (
        <span 
          className={`inline-block ${showCursorBlink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;