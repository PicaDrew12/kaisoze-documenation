import React, { useState } from 'react';
import dictionary from '../dictionary.json';


const tooltipStyle = {
  position: 'relative',
  cursor: 'help',
  color: '#b5ebff',
  display: 'inline-block',
  fontFamily: "'Inter', sans-serif",
};

const popupStyle = {
  position: 'absolute',
  bottom: '110%',
  left: '50%',
  transform: 'translateX(-50%)',
  minWidth: '250px',
  maxWidth: '350px',
  backgroundColor: '#121212',
  color: '#e0e0e0',
  border: '1.5px solid #444',
  borderRadius: '8px',
  padding: '16px 20px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.8)',
  zIndex: 100,
  lineHeight: '1.6',
  whiteSpace: 'normal',
  pointerEvents: 'auto',
  fontFamily: "'Inter', sans-serif",
};

const wordStyle = {
  fontSize: '20px',
  fontWeight: '700',
  marginBottom: '8px',
  borderBottom: '1px solid #555',
  paddingBottom: '6px',
  display: 'block',
  color: '#a0d8ff',
};

const definitionStyle = {
  fontSize: '15px',
  fontStyle: 'normal',
  lineHeight: '1.6',
  color: '#c0c0c0',
};

export default function Tooltip({ word, children }) {
  const [visible, setVisible] = useState(false);

  // Look up definition from dictionary, fallback if not found
  const definition = dictionary[word] || "Definition not found.";

  return (
    <span
      style={tooltipStyle}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      tabIndex={0}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children || word}
      {visible && (
        <div style={popupStyle} role="tooltip" aria-live="polite">
          <span style={wordStyle}>{word}</span>
          <div style={definitionStyle}>{definition}</div>
        </div>
      )}
    </span>
  );
}
