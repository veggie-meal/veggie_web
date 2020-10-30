import React, { useState, useEffect } from 'react';
import { Calendar, Avatar } from 'antd';
import { withRouter} from "react-router-dom";
import moment from 'moment';
import axios from 'axios';

import * as config from '../config';

let dayMapData = {};

function dateFullCellRender(dateValue) {
  let color;
  switch (dayMapData[dateValue.format('YYYY-MM-DD')]) {
    case 'VEGAN':
      color = '#68B0AB';
      break;
    case 'LACTO':
      color = '#8FC0A9';
      break;
    case 'OVO':
      color = '#8FC0A9';
      break;
    case 'LACTO-OVO':
      color = '#C8D5B9';
      break;
    case 'PESCO':
      color = '#FAF3DD';
      break;
    case 'POLLO':
      color = '#F1E2CC';
      break;
    case 'FLEXITARIAN':
      color = '#DEBA90';
      break;
    default:
      color = '#DE9166';
      break;
  }
    return (
      <Avatar style={{ textDecorationStyle: 'bold', color: 'black', backgroundColor: color, verticalAlign: 'middle' }} size="medium">
        {dateValue.date()}
      </Avatar>
    );
}

const dayNums = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function MainCalendar({ id, history }) {
  const dayNum = new Date().getMonth();
  const [value, setValue] = useState(moment());
  const [dayMap, setDayMap] = useState({});

  useEffect(() => {
    const url = config.API_ADDR + 'calander/list';
    axios.post(url, {
      startDate: 1,
      endDate: dayNums[dayNum],
      userId: id,
    })
    .then(function(res) {
      console.log(res.data.calanderList);
      let newDayMap;
      res.data.calanderList.forEach(function(day) {
        newDayMap[day.wrt_time] = {
          food: day.food,
          vegan_type: day.vegan_type,
        };
      });
      setDayMap(newDayMap);
      dayMapData = dayMap;
    })
    .catch(function(err) {
      console.log(err);
    });
  }, []);

  function onSelect(selected) {
    if (value.format('YYYY-MM') === selected.format('YYYY-MM')) {
      history.push(`/today/${selected.format('YYYY-MM-DD')}`) // 이 부분 바꿔야 함
    }
    setValue(value);
  };

  return (
    <div className="site-calendar-demo-card">
      <Calendar
        dateFullCellRender={dateFullCellRender}
        fullscreen={false}
        value={value}
        onSelect={onSelect}
      />
    </div>
  );
}

export default withRouter(MainCalendar);
