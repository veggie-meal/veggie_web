import React from 'react';
import './EmojiButton.css';

function EmojiButton({ food }) {
  return (
    <div>
      <input type="checkbox" id={food} />
      <label htmlFor={food}>{ food }</label>
    </div>
  );
}

export default EmojiButton;
