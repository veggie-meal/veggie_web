import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from 'antd';

import BadgeItem from '../components/BadgeItem';
import * as config from '../config';

const { Title } = Typography;

function Badge() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios.post(config.API_ADDR + 'veggie/list', { userId: 1 })
    .then(function(res) {
      setBadges(res.data.veggieList);
    })
    .catch(function(err) {
      console.log(err);
    });
  }, []);

  let badgeList = [];
  badges.forEach(badge => badgeList.push(<BadgeItem id={badge.veggie_id} achieved={badge.is_my} key={badge.veggie_id} />));

  return (
    <div className="site-layout-content" style={{textAlign:'center'}}>
      <Title level={4}>나의 뱃지들</Title>
      <div style={{display:'grid', gridTemplateRows:'repeat(3, 1fr)', gridTemplateColumns:'repeat(3, 1fr)'}}>
        {badgeList}
      </div>
    </div>
  );
}

export default Badge;
