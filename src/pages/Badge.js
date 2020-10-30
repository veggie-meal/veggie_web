import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BadgeItem from '../components/BadgeItem';
import * as config from '../config';

function Badge() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios.post(config.API_ADDR + 'veggie/list', { userId: 1 })
    .then(function(res) {
      console.log(res)
      setBadges(res.data.veggieList.filter(veggie => veggie.is_my === 1));
    })
    .catch(function(err) {
      console.log(err);
    });
  }, []);

  let badgeList = [];
  badges.forEach(badge => badgeList.push(<BadgeItem id={badge.veggie_id} achieved={badge.is_my} key={badge.veggie_id} />));

  return (
    <div className="site-layout-content" style={{display:'grid', gridTemplateRows:'repeat(3, 1fr)', gridTemplateColumns:'repeat(3, 1fr)'}}>
      {badgeList}
    </div>
  );
}

export default Badge;
