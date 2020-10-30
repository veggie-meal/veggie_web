import React from 'react';

import MainCalendar from '../components/MainCalendar';
import Goal from '../components/Goal';

function Main({ id, token, name }) {
  return (
    <div className="site-layout-content">
      <MainCalendar id={id} />
      <Goal />
    </div>
  );
}

export default Main;
