import React, { useState } from 'react';
import './NewDiet.css';
import { Button, Input, Typography } from 'antd';

const { Title } = Typography;

function NewDiet({ closeNewDiet }) {
  const [foodList, setFoodList] = useState([<Input style={{marginBottom:'6px'}} />]);

  function closeSelf() {
    closeNewDiet();
  }

  function addFood(e) {
    // 먼저 get으로 받아 와야 할 것 같다
    e.preventDefault();
    console.log('addFood');
    // 음식 목록을 먼저 받아 오고
    setFoodList([...foodList, <Input style={{marginBottom:'6px'}} />]);
  }

  function saveDiet(e) {
    e.preventDefault();
    console.log('addDiet');
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
            <Input />
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
