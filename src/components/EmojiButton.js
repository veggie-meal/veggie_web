import React from 'react';
import './EmojiButton.css';

function EmojiButton({ food }) {
  return (
    <div>
      <input type="checkbox" id={food} className="emoji-button-input" />
      <label htmlFor={food} className="emoji-button-label">{ food }</label>
    </div>
  );
}

export default EmojiButton;
