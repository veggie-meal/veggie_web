import React from 'react';

import './EmojiButton.css';

function EmojiButton({ food }) {
  let foodEmoji;

  switch(food) {
    case 'VEGETABLE':
      foodEmoji = '🥦';
      break;
    case 'MILK':
      foodEmoji = '🥛';
      break;
    case 'EGG':
      foodEmoji = '🥚';
      break;
    case 'FISH':
      foodEmoji = '🐟';
      break;
    case 'CHICKEN':
      foodEmoji = '🐔';
      break;
    case 'MEAT':
      foodEmoji = '🥩';
      break;
    default:
      break;
  }

  return (
    <div className="emojibutton-container">
      <input type="checkbox" id={food} value={food} className="emojibutton-input" />
      <label htmlFor={food} className="emojibutton-label">{ foodEmoji }</label>
    </div>
  );
}

export default EmojiButton;
