import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout } from 'antd';
import EmojiButton from '../components/EmojiButton';
import NewDiet from '../components/NewDiet';

const { Content } = Layout;

function Today({ match }) {
  const [isNewDietVisible, setIsNewDietVisible] = useState(false);

  function showNewDiet() {
    setIsNewDietVisible(true);
  }

  let modal;
  if (isNewDietVisible) modal = <NewDiet />;

  return (
    <Layout>
      <Content style={{padding:'40px 20px',minHeight:"100vh",backgroundColor:"white"}}>
        <header>Today</header>
        <section className="site-calendar-demo-card" style={{textAlign:"center",marginTop:"20px"}}>
          <Button style={{float:"right"}}><Link to="/">Home</Link></Button>
          <h2>{match.params.dayId}</h2>
        </section>
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
      </Content>
    </Layout>
  );
}

export default Today;
