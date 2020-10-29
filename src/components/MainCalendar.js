import React, { useState, useEffect } from 'react';
import { Calendar, Avatar } from 'antd';
import { withRouter} from "react-router-dom";
import moment from 'moment';

const listData = {};
listData['2020-10-05'] = 'vegan';
listData['2020-10-06'] = 'vegan';
listData['2020-10-07'] = 'vegan';
listData['2020-10-08'] = 'vegan';
listData['2020-10-15'] = 'ovo';
listData['2020-10-25'] = 'ovo';
listData['2020-10-09'] = 'ovo';

function dateFullCellRender(value) {
  let color = '#faf3dd';
  switch (listData[value.format('YYYY-MM-DD')]) {
    case ('vegan'):
      color = '#68b0ab';
      break;
    case ('ovo'):
      color = '#c8d5b9';
      break;
    default:
        break;
  }
    return (
      <Avatar style={{ textDecorationStyle: 'bold', color: 'black', backgroundColor: color, verticalAlign: 'middle' }} size="medium">
        {value.date()}
      </Avatar>
    );
}

function MainCalendar(props) {
  const [value, setValue] = useState(moment());

  useEffect(() => {

  });

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
