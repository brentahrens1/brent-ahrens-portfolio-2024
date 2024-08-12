import React, { useState, useEffect, useRef, CSSProperties } from 'react';

const CustomCursor: React.FC<{ active: boolean }> = ({ active }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverText, setIsOverText] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const element = e.target as HTMLElement;
      const tagName = element.tagName.toLowerCase();

      if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'a'].includes(tagName)) {
        setIsOverText(true);
      } else {
        setIsOverText(false);
      }
    };

    if (active) {
      window.addEventListener('mousemove', updatePosition);
    } else {
      window.removeEventListener('mousemove', updatePosition);
    }

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, [active]);

  if (!active) {
    return null;
  }

  const cursorStyle: CSSProperties = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    width: '60px',
    height: '60px',
    backgroundColor: '#3D50FC',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: `translate(-50%, -50%) scale(${isOverText ? 5.5 : 1})`,
    transition: 'transform 0.2s ease-in-out',
    zIndex: 9999,
    mixBlendMode: 'difference',
    color: 'white',
  };

  return <div style={cursorStyle}></div>;
};

export default CustomCursor;