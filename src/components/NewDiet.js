import React, { useState } from 'react';
import './NewDiet.css';
import { Button, Input } from 'antd';

function NewDiet({ closeNewDiet }) {
  const [foodList, setFoodList] = useState([<Input />]);

  function closeSelf() {
    closeNewDiet();
  }

  function addFood(e) {
    // 먼저 get으로 받아 와야 할 것 같다
    e.preventDefault();
    console.log('addFood');
    // 음식 목록을 먼저 받아 오고
    setFoodList([...foodList, <Input />]);
  }

  function saveDiet(e) {
    e.preventDefault();
    console.log('addDiet');
  }

  return (
    <div id="background">
      <div class="site-layout-content">
        <Button type="text" onClick={closeSelf}>x</Button>
        <div>식단 등록</div>
        <form>
          <section>
            <label>식단명</label>
            <Input />
          </section>
          <section>
            <label>음식 목록</label>
            <div>
              {foodList}
            </div>
            <Button type="primary" shape="circle" onClick={addFood}>+</Button>
          </section>
          <Button type="primary" onClick={saveDiet}>저장하기</Button>
        </form>
      </div>
    </div>
  );
}

export default NewDiet;
