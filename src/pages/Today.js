import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography } from 'antd';

import EmojiButton from '../components/EmojiButton';
import NewDiet from '../components/NewDiet';
import * as config from '../config';

const { Title, Text } = Typography;

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

  let diets;
  if (!dietList) {
    dietList.forEach(diet => diets.push(<div>식단들</div>));
  } else {
    diets = (
      <div style={{marginBottom:'20px'}}>
        <div style={{fontSize:'40px',marginBottom:'20px'}}>🍃</div>
        <Text type="secondary" style={{color:'#8fc0a9'}}>아직 등록된 식단이 없어요!</Text>
      </div>
    );
  }

  return (
    <>
      <section className="site-layout-content" style={{textAlign:'center'}}>
        <Title level={4}>{month}월 {date}일의 비건 도전</Title>
        <div style={{display:'grid', gridTemplateRows:'repeat(2, 1fr)', gridTemplateColumns:'repeat(3, 1fr)', marginBottom: '30px'}}>
          <EmojiButton food="VEGETABLE" />
          <EmojiButton food="MILK" />
          <EmojiButton food="EGG" />
          <EmojiButton food="FISH" />
          <EmojiButton food="CHICKEN" />
          <EmojiButton food="MEAT" />
        </div>
        <Button type="primary" onClick={saveToday}>저장하기</Button>
        <img src="/image/divider_dashed.svg" style={{margin:'28px 0px',width:'100%'}} />
        <Title level={4}>{month}월 {date}일의 식단</Title>
        {diets}
        <Button type="primary" shape="circle" onClick={showNewDiet}>+</Button>
      </section>
      {modal}
    </>
  );
}

export default Today;
