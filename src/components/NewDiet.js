import React, { useState } from 'react';
import './NewDiet.css';

function NewDiet({ closeNewDiet }) {
  const [foodList, setFoodList] = useState([<input />]);

  function closeSelf() {
    closeNewDiet();
  }

  function addFood(e) {
    // 먼저 get으로 받아 와야 할 것 같다
    e.preventDefault();
    console.log('addFood');
    // 음식 목록을 먼저 받아 오고
    setFoodList([...foodList, <input />]);
  }

  function saveDiet(e) {
    e.preventDefault();
    console.log('addDiet');
  }

  return (
    <div id="background">
      <div id="modal">
        <button onClick={closeSelf}>x</button>
        <div>식단 등록</div>
        <form>
          <section>
            <label>식단명</label>
            <input />
          </section>
          <section>
            <label>음식 목록</label>
            <div>
              {foodList}
            </div>
            <button onClick={addFood}>+</button>
          </section>
          <button onClick={saveDiet}>저장하기</button>
        </form>
      </div>
    </div>
  );
}

export default NewDiet;
