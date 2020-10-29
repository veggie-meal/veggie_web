import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';

import EmojiButton from '../components/EmojiButton';
import NewDiet from '../components/NewDiet';
import * as config from '../config';

function Today() {
  const match = useRouteMatch('/today/:dayId');
  let [, month, date] = match.params.dayId.split('-');
  if (month[0] === '0') month = month[1];
  if (date[0] === '0') date = date[1];

  const [isNewDietVisible, setIsNewDietVisible] = useState(false);
  const [foodList, setFoodList] = useState([]);
  const [dietList, setDietList] = useState([]);

  useEffect(() => {
    // 음식
    axios.post(config.API_ADDR + 'diet/dietList', {
      userId: 1,
      wrt_time: match.params.dayId,
    })
    .then(function(res) {
      setFoodList(res.data.data[0].food.split(','));
    })
    .catch(function(err) {
      console.log(err);
    });

    // 식단
    axios.post(config.API_ADDR + 'diet/dietLog', {
      userId: 1,
      wrt_time: match.params.dayId,
    })
    .then(function(res) {
      setDietList(res.data.data);
    })
    .catch(function(err) {
      console.log(err);
    });
  }, []);

  function showNewDiet() {
    setIsNewDietVisible(true);
  }

  function saveToday() {
    axios.post(config.API_ADDR + 'diet/addDiet', {
      userId: 1,
      food: foodList.join(','),
    })
    .then(function(res) {
      console.log(res);
      // setFoodList
    })
    .catch(function(err) {
      console.log(err);
    });
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
          <EmojiButton food="VEGETABLE" />
          <EmojiButton food="MILK" />
          <EmojiButton food="EGG" />
          <EmojiButton food="FISH" />
          <EmojiButton food="CHICKEN" />
          <EmojiButton food="MEAT" />
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
