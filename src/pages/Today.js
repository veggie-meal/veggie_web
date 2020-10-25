import React, { Fragment, useState } from 'react';
import EmojiButton from '../components/EmojiButton';
import NewDiet from '../components/NewDiet';

function Today() {
  const [isNewDietVisible, setIsNewDietVisible] = useState(false);

  function showNewDiet() {
    setIsNewDietVisible(true);
  }

  let modal;
  if (isNewDietVisible) modal = <NewDiet />;

  return (
    <Fragment>
      <header>Today</header>
      <section>
        <div>
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
      <section>
        <p>오늘의 식단</p>
        <button onClick={showNewDiet}>+</button>
      </section>
      {modal}
    </Fragment>
  );
}

export default Today;
