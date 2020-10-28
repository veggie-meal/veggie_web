import React from 'react';
import { Calendar } from 'antd';
import { useHistory} from "react-router-dom";

const MainCalendar = () => {
  const history = useHistory();

  return (
      <div className="site-calendar-demo-card">
        <Calendar
            fullscreen={false}
            onSelect={(value) => history.push(`/today/${value.format('YYYY-MM-DD')}`)}
        />
      </div>
  );
}

export default MainCalendar;
