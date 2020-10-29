import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import EmojiButton from '../components/EmojiButton';
import NewDiet from '../components/NewDiet';

function Today() {
  const match = useRouteMatch('/today/:dayId');
  let [, month, date] = match.params.dayId.split('-');
  if (month[0] === '0') month = month[1];
  if (date[0] === '0') date = date[1];

  const [isNewDietVisible, setIsNewDietVisible] = useState(false);

  function showNewDiet() {
    setIsNewDietVisible(true);
  }

  function saveToday() {
    console.log('insert_vegan?');
  }

  function closeNewDiet() {
    setIsNewDietVisible(false);
  }

  let modal;
  if (isNewDietVisible) modal = <NewDiet closeNewDiet={closeNewDiet} />;

  return (
    <>
      <header>{month}월 {date}일의 식단</header>
      <section className="site-layout-content">
        <div style={{display:'grid', gridTemplateRows:'repeat(3, 1fr)', gridTemplateColumns:'repeat(3, 1fr)'}}>
          <EmojiButton food="🥦" />
          <EmojiButton food="🥛" />
          <EmojiButton food="🥚" />
          <EmojiButton food="🐟" />
          <EmojiButton food="🐔" />
          <EmojiButton food="🐖" />
          <EmojiButton food="🐄" />
        </div>
        <button onClick={saveToday}>저장하기</button>
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
