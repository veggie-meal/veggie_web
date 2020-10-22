import React from 'react';
import EmojiButton from '../components/EmojiButton';

function Today() {
  function handleClick() {
    console.log('clicked');
  }

  return (
    <div>
      <header>Today</header>
      <div>오늘 안 먹은 것을 고르세요?</div>
      <main>
        <EmojiButton food="🐖" />
        <EmojiButton food="🐄" />
        <EmojiButton food="🐟" />
        <EmojiButton food="🥚" />
        <EmojiButton food="🥛" />
      </main>
      <button onClick={handleClick}>저장하기</button>
    </div>
  );
}

export default Today;
