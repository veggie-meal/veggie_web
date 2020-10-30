import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography } from 'antd';

import EmojiButton from '../components/EmojiButton';
import NewDiet from '../components/NewDiet';
import * as config from '../config';

const { Title, Text } = Typography;

function Today({ id, token, name}) {
  const match = useRouteMatch('/today/:dayId');
  let [, month, date] = match.params.dayId.split('-');
  if (month[0] === '0') month = month[1];
  if (date[0] === '0') date = date[1];

  const [isNewDietVisible, setIsNewDietVisible] = useState(false);
  const [foodList, setFoodList] = useState([]);
  const [dietList, setDietList] = useState([]);
  const [isFoodListNew, setIsFoodListNew] = useState(false);
  const [isDietListNew, setIsDietListNew] = useState(false);

  useEffect(() => {
    // 음식
    axios.post(config.API_ADDR + 'diet/dietList', {
      userId: 1,
      wrt_time: match.params.dayId,
    })
    .then(function(res) {
      if (Boolean(res.data.data.length)) {
        setFoodList(res.data.data[0].food.split(','));
      } else {
        setIsFoodListNew(true);
      }
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
      if (Boolean(res.data.data.length)) {
        setDietList(res.data.data);
      } else {
        setIsDietListNew(true);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  }, []);

  function showNewDiet() {
    setIsNewDietVisible(true);
  }

  function saveFood() {
    const foodURL = isFoodListNew ? 'diet/addDiet' : 'diet/modifyDiet';
    // const dietURL = isFoodListNew ? 'diet/addDietLog' : 'diet/modifyDietLog';

    axios.post(config.API_ADDR + foodURL, {
      userId: id,
      food: foodList.join(','),
      wrt_time: match.params.dayId,
    })
    .then(function(res) {
      console.log(res);
      // 뭔가 알림을 띄우고 메인으로 넘어가야 함..?
    })
    .catch(function(err) {
      console.log(err);
    });

    // axios.post(config.API_ADDR + dietURL, {
    //   userId: id,
    //   content: '',
    //   food_list: null, // 이거 백엔드에서 계산하는 거 아닌가..?
    //   wrt_time: null, // 이것도 백엔드에서 하는 거 아닌가 원래...?
    // })
    // .then(function(res) {
    //   console.log(res);
    //   // 뭔가 알림을 띄우고 메인으로 넘어가야 함..?
    // })
    // .catch(function(err) {
    //   console.log(err);
    // });
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

  function handleChange(e) {
    if (e.target.checked) {
      setFoodList([...foodList, e.target.value]);
    } else {
      const index = foodList.indexOf(e.target.value);
      if (index !== -1) {
        const newFoodList = foodList.slice();
        newFoodList.splice(index, 1);
        setFoodList(newFoodList);
      }
    }
  }

  return (
    <>
      <section className="site-layout-content" style={{textAlign:'center'}}>
        <Title level={4}>{month}월 {date}일의 비건 도전</Title>
        <div style={{display:'grid', gridTemplateRows:'repeat(2, 1fr)', gridTemplateColumns:'repeat(3, 1fr)', marginBottom: '30px'}}>
          <EmojiButton food="VEGETABLE" handleChange={handleChange} />
          <EmojiButton food="MILK" handleChange={handleChange} />
          <EmojiButton food="EGG" handleChange={handleChange} />
          <EmojiButton food="FISH" handleChange={handleChange} />
          <EmojiButton food="CHICKEN" handleChange={handleChange} />
          <EmojiButton food="MEAT" handleChange={handleChange} />
        </div>
        <Button type="primary" onClick={saveFood}>저장하기</Button>
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
