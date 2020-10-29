import React, { useState } from 'react';
import EmojiButton from '../components/EmojiButton';
import NewDiet from '../components/NewDiet';

function Today({ match }) {
  let [, month, date] = match.params.dayId.split('-');
  if (date[0] === '0') date = date[1];

  const [isNewDietVisible, setIsNewDietVisible] = useState(false);

  function showNewDiet() {
    setIsNewDietVisible(true);
  }

  let modal;
  if (isNewDietVisible) modal = <NewDiet />;

  return (
    <>
      <header>{month}월 {date}일의 식단</header>
      <section className="site-layout-content">
        <div style={{display:'flex', flexWrap:'wrap'}}>
          <EmojiButton food="🥦" />
          <EmojiButton food="🥛" />
          <EmojiButton food="🥚" />
          <EmojiButton food="🐟" />
          <EmojiButton food="🐔" />
          <EmojiButton food="🐖" />
          <EmojiButton food="🐄" />
        </div>
        <button>저장하기</button>
      </section>
      <hr />
      <section className="site-layout-content">
        <p>오늘의 식단</p>
        <button onClick={showNewDiet}>+</button>
      </section>
      {modal}
    </>
  );
}

export default Today;
