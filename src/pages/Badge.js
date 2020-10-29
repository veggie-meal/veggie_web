import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import axios from 'axios';

import BadgeItem from '../components/BadgeItem';
import * as config from '../config';

function Badge() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios.get(config.API_ADDR + 'veggie/list', { userId: 1 })
    .then(function(res) {
      setBadges(res.veggieList.filter(veggie => veggie.is_my === 1));
    })
    .catch(function(err) {
      console.log(err);
      setBadges([
        {
          "veggie_id": 1,
          "veggie_name": "가지",
          "is_my": 1,
          "wrt_time": "2020-10-21T15:00:00.000Z"
        },
        {
          "veggie_id": 2,
          "veggie_name": "사과",
          "is_my": 1,
          "wrt_time": "2020-10-22T15:00:00.000Z"
        },
        {
          "veggie_id": 3,
          "veggie_name": "선인장",
          "is_my": 1,
          "wrt_time": "2020-10-24T15:00:00.000Z"
        },
        {
          "veggie_id": 4,
          "veggie_name": "베지",
          "is_my": 1,
          "wrt_time": null
        },
        {
          "veggie_id": 5,
          "veggie_name": "베지얼굴",
          "is_my": 1,
          "wrt_time": null
        },
        {
          "veggie_id": 6,
          "veggie_name": "바다",
          "is_my": 1,
          "wrt_time": null
        },
        {
          "veggie_id": 7,
          "veggie_name": "구름",
          "is_my": 1,
          "wrt_time": null
        },
        {
          "veggie_id": 8,
          "veggie_name": "나무",
          "is_my": 1,
          "wrt_time": null
        },
        {
          "veggie_id": 9,
          "veggie_name": "당근",
          "is_my": 1,
          "wrt_time": null
        }
      ]);
    });
  }, []);

  let badgeNum = 7;
  let colCount = 3;
  let rowCount = badgeNum / colCount;
  const rows = [];

  for (let j = 0; j < rowCount+1; j++) {
    const cols = [];
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <BadgeItem id={j*colCount+i}/>
        </Col>,
      );
    }
    rows.push(
      <Row gutter={[8,32]}>{cols}</Row>
    )
  }

  let badgeList = [];
  badges.forEach(badge => badgeList.push(<BadgeItem id={badge.veggie_id} />));

  return (
    <div className="site-layout-content" style={{display:'grid', gridTemplateRows:'repeat(3, 1fr)', gridTemplateColumns:'repeat(3, 1fr)'}}>
      {badgeList}
    </div>
  );
}

export default Badge;
