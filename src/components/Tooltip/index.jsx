"use client";
import { useState } from "react";
import { useId } from 'react';  // For generating unique IDs

export default function ToolTip({ children, tooltip }) {
  const [mouseOver, setMouseOver] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const tooltipId = useId(); // Unique ID for aria-describedby
  
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onMouseMove={handleMouseMove}
      onFocus={() => setMouseOver(true)}  // For keyboard users
      onBlur={() => setMouseOver(false)}  // For keyboard users
      className="relative"
      aria-describedby={tooltipId} // Describes the tooltip content for screen readers
    >
      {children}
      {mouseOver && (
        <span
          id={tooltipId}  // Links the tooltip with the element using aria-describedby
          role="tooltip"  // Identifies the element as a tooltip
          style={{
            top: mousePosition.y + 10, 
            left: mousePosition.x + 10, 
          }}
          className="z-50 fixed pointer-events-none bg-off-black px-2 py-1 text-off-white"
          aria-live="polite"  // Ensures the tooltip is announced by screen readers when it appears
        >
          {tooltip}
        </span>
      )}
    </div>
  );
}
