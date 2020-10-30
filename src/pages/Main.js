import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainCalendar from '../components/MainCalendar';
import Goal from '../components/Goal';
import * as config from '../config';

function Main({ id, token, name }) {
  const [veganType, setVeganType] = useState('');
  const [achievementPercentage, setachievementPercentage] = useState(0);

  useEffect(() => {
    axios.post(config.API_ADDR + 'user/data', { userId: id })
    .then(function(res) {
      setVeganType(res.data.userData[0].vegan_type);
    })
    .catch(function(err) {
      console.log(err);
    });
  });

  function getPercentage(percentage) {
    setachievementPercentage(percentage);
  }

  return (
    <div className="site-layout-content">
      <MainCalendar id={id} veganType={veganType} sendPercentage={getPercentage} />
      <Goal percentage={achievementPercentage} />
    </div>
  );
}

export default Main;
