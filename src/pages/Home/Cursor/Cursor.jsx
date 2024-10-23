import React from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorDotOutline = React.useRef();
  const cursorDot = React.useRef();
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = React.useState(false);
  const [cursorEnlarged, setCursorEnlarged] = React.useState(false);

  const handleMouseMove = React.useCallback(event => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    updateCursorPosition(x, y);
  }, []);

  const handleMouseEnter = React.useCallback(() => setCursorVisible(true), []);
  const handleMouseLeave = React.useCallback(() => setCursorVisible(false), []);
  const handleMouseDown = React.useCallback(() => setCursorEnlarged(true), []);
  const handleMouseUp = React.useCallback(() => setCursorEnlarged(false), []);
  const handleResize = React.useCallback(() => {
    document.documentElement.style.setProperty('--viewport-width', `${window.innerWidth}px`);
    document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", handleResize);
    requestRef.current = requestAnimationFrame(animateDotOutline);

    handleLinkHovers();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp, handleResize]);

  const updateCursorPosition = (x, y) => {
    if (cursorDot.current && cursorDotOutline.current) {
      cursorDot.current.style.top = `${y}px`;
      cursorDot.current.style.left = `${x}px`;
      cursorDotOutline.current.style.top = `${y}px`;
      cursorDotOutline.current.style.left = `${x}px`;
    }
  };

  React.useEffect(() => {
    cursorDot.current.style.opacity = cursorVisible ? 1 : 0;
    cursorDotOutline.current.style.opacity = cursorVisible ? 1 : 0;
  }, [cursorVisible]);

  React.useEffect(() => {
    const scale = cursorEnlarged ? 0.7 : 1;
    const outlineScale = cursorEnlarged ? 5 : 1;
    cursorDot.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
    cursorDotOutline.current.style.transform = `translate(-50%, -50%) scale(${outlineScale})`;
  }, [cursorEnlarged]);

  const handleLinkHovers = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setCursorEnlarged(true));
      el.addEventListener("mouseout", () => setCursorEnlarged(false));
    });
  };

  const animateDotOutline = time => {
    if (previousTimeRef.current !== undefined) {
      const { x, y } = mousePosition;
      const dx = endX - x;
      const dy = endY - y;
      setMousePosition(prev => ({
        x: prev.x + dx / 8,
        y: prev.y + dy / 8
      }));
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={cursorDotOutline} className="cursor-outline" />
      <div ref={cursorDot} className="cursor" />
    </>
  );
};

export default Cursor;