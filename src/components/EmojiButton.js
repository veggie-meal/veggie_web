import React from 'react';

import './EmojiButton.css';

function EmojiButton({ food }) {
  return (
    <div className="emojibutton-container">
      <input type="checkbox" id={food} className="emojibutton-input" />
      <label htmlFor={food} className="emojibutton-label">{ food }</label>
    </div>
  );
}

export default EmojiButton;
