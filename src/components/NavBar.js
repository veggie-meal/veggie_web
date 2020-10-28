import React from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import moment from 'moment';

function NavBar() {
  const today = moment();

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{position:"fixed",left:0,bottom:0,width:"100%"}}>
      <Menu.Item key="1" style={{width:"25%",textAlign:"center"}}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" style={{width:"25%",textAlign:"center"}}>
        <Link to={`/today/${today.format('YYYY-MM-DD')}`}>Today</Link>
      </Menu.Item>
      <Menu.Item key="3" style={{width:"25%",textAlign:"center"}}>
        <Link to="/badge">Badge</Link>
      </Menu.Item>
      <Menu.Item key="4" style={{width:"25%",textAlign:"center"}}>
        <Link to="/setting">Setting</Link>
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;
