import React, { useState, useEffect } from 'react';
import { Calendar, Avatar } from 'antd';
import { withRouter} from "react-router-dom";
import moment from 'moment';
import axios from 'axios';

import * as config from '../config';
import * as colors from '../colors';

const listData = {};
listData['2020-10-05'] = 'VEGAN';
listData['2020-10-06'] = 'POLLO';
listData['2020-10-07'] = 'FLEXITARIAN';
listData['2020-10-08'] = 'VEGAN';
listData['2020-10-15'] = 'LACTO';
listData['2020-10-25'] = 'FLEXITARIAN';
listData['2020-10-09'] = 'PESCO';

function dateFullCellRender(dateValue) {
  let color = '#faf3dd';
  switch (listData[dateValue.format('YYYY-MM-DD')]) {
    case 'VEGAN':
      color = colors.GREEN;
      break;
    case 'LACTO':
      color = colors.LIGHT_GREEN_1;
      break;
    case 'OVO':
    case 'LACTO-OVO':
    case 'PESCO':
    case 'POLLO':
    case 'FLEXITARIAN':
    default:
        break;
  }
    return (
      <Avatar style={{ textDecorationStyle: 'bold', color: 'black', backgroundColor: color, verticalAlign: 'middle' }} size="medium">
        {dateValue.date()}
      </Avatar>
    );
}

function MainCalendar(props) {
  const [value, setValue] = useState(moment());

  useEffect(() => {
    const url = config.API_ADDR + 'api/calander/list';
    axios.get(url, {
      startDate: 1,
      endDate: 31,
      userId: 1,
    })
    .then(function(res) {
      // res.calanderList
    })
    .catch(function(err) {
      console.log(err);
    });
  }, []);

  function onSelect(selected) {
    if (value.format('YYYY-MM') === selected.format('YYYY-MM')) {
      props.history.push(`/today/${selected.format('YYYY-MM-DD')}`) // 이 부분 바꿔야 함
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
