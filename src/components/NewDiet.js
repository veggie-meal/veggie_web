import React, { useState, useEffect } from 'react';
import './NewDiet.css';
import { Button, Input, Typography } from 'antd';
import axios from 'axios';

import * as config from '../config';

const { Title } = Typography;

function NewDiet({ closeNewDiet, isDietNew, id, date, contentValue, foodListValue, logSeq }) {
  const [foodList, setFoodList] = useState([]);
  const [content, setContent] = useState(contentValue);

  useEffect(() => {
    if (!isDietNew) {
      for (const [key, value] of Object.entries(JSON.parse(foodListValue))) {
        setFoodList([...foodList, <Input className="diet-food" style={{marginBottom:'6px'}} defaultValue={value} key={key} />])
      }
    }
  }, []);

  function closeSelf() {
    closeNewDiet();
  }

  function addFood(e) {
    e.preventDefault();
    setFoodList([...foodList, <Input className="diet-food" style={{marginBottom:'6px'}} />]);
  }

  function saveDiet(e) {
    e.preventDefault();
    const dietURL = isDietNew ? 'diet/addDietLog' : 'diet/modifyDietLog';

    console.log(getFoodJSON())
    axios.post(config.API_ADDR + dietURL, {
      userId: id,
      content,
      food_list: getFoodJSON(),
      wrt_time: date,
      log_seq: logSeq,
    })
    .then(function(res) {
      console.log(res);
      // 뭔가 알림을 띄우고 메인으로 넘어가야 함..?
      closeNewDiet();
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  function updateContent(e) {
    setContent(e.target.value);
  }

  function getFoodJSON() {
    let foodObject = {};
    document.querySelectorAll('.diet-food').forEach((target, i) => {
      foodObject[i] = target.value;
    });
    return JSON.stringify(foodObject);
  }

  return (
    <div id="background">
      <div className="site-layout-content" style={{textAlign: 'center', width: '80%'}}>
        <div style={{width:'100%', textAlign:'right'}}>
          <Button type="text" onClick={closeSelf}>x</Button>
        </div>
        <Title level={5} style={{color:'#68B0AB'}}>식단 등록</Title>
        <form>
          <section style={{marginBottom:'20px'}}>
            <label style={{display:'block', marginBottom:'8px'}}>식단명</label>
            <Input onChange={updateContent} defaultValue={contentValue} />
          </section>
          <section style={{marginBottom:'20px'}}>
            <label style={{display:'block', marginBottom:'8px'}}>음식 목록</label>
            <div style={{marginBottom:'10px'}}>
              {foodList}
            </div>
            <Button type="primary" shape="circle" ghost onClick={addFood}>+</Button>
          </section>
          <Button type="primary" onClick={saveDiet}>저장하기</Button>
        </form>
      </div>
    </div>
  );
}

export default NewDiet;
