import React, { useState, useEffect } from 'react';
import { Calendar, Avatar } from 'antd';
import { withRouter} from "react-router-dom";
import moment from 'moment';
import axios from 'axios';

import * as config from '../config';

let dayMapData = {};

function dateFullCellRender(dateValue) {
  let color;
  if (dayMapData[dateValue.format('YYYY-MM-DD')] && dayMapData[dateValue.format('YYYY-MM-DD')].food) {
    switch (dayMapData[dateValue.format('YYYY-MM-DD')].food) {
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
        color = '#E7C69F';
        break;
      default:
        color = '#E2A684';
        break;
    }
  }

  return (
    <Avatar style={{ textDecorationStyle: 'bold', color: 'black', backgroundColor: color, verticalAlign: 'middle' }} size="medium">
      {dateValue.date()}
    </Avatar>
  );
}

const dayNums = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const veganTypes = ['FLEXITARIAN', 'POLLO', 'PESCO', 'LACTO-OVO', 'OVO', 'LACTO', 'VEGAN'];

function MainCalendar({ id, veganType, history, sendPercentage }) {
  const dayNum = new Date().getMonth();
  const [value, setValue] = useState(moment());
  const [dayMap, setDayMap] = useState({});

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const url = config.API_ADDR + 'calander/list';
    axios.post(url, {
      // 일단 달력 전치가 아니라 월별로
      startDate: `${year}-${month}-01`,
      endDate: `${year}-${month}-${dayNums[month-1]}`,
      userId: id,
    })
    .then(function(res) {
      console.log(res.data.calanderList);
      let newDayMap = {};
      res.data.calanderList.forEach(function(day) {
        const newTime = day.wrt_time.slice(0, 10);
        newDayMap[newTime] = {
          food: day.food,
          vegan_type: day.vegan_type,
        };
      });
      setDayMap({...newDayMap});
      dayMapData = {...newDayMap};

      let count = 0;
      // console.log(44444, dayMapData)
      for (const [key, value] of Object.entries(dayMapData)) {
        // console.log(key, value)
        if (veganTypes.indexOf(value.vegan_type) >= veganTypes.indexOf(veganType)) {
          count++; // 아직 락토랑 오보 문제는 해결 못 함,,,
        }
      }
      // setDayMap(newDayMap);
      sendPercentage(count / dayNums[dayNum] * 100);
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
