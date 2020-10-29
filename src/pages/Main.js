import React from 'react';

import MainCalendar from '../components/MainCalendar';
import Goal from '../components/Goal';

function Main() {
  return (
    <div className="site-layout-content">
      <MainCalendar />
      <Goal />
    </div>
  );
}

export default Main;
