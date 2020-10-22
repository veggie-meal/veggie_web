import React from 'react';
import EmojiButton from '../components/EmojiButton';

function Today() {
  return (
    <div>
      <header>Today</header>
      <main>
        <EmojiButton food="🐖" />
        <EmojiButton food="🐄" />
        <EmojiButton food="🐟" />
        <EmojiButton food="🥚" />
        <EmojiButton food="🥛" />
      </main>
    </div>
  );
}

export default Today;
