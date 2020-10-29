import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import NavBar from './components/NavBar';
import Main from './pages/Main';
import Today from './pages/Today';
import Badge from './pages/Badge';
import Setting from './pages/Setting';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const { Content } = Layout;

function App() {
  const [user, setUser] = useState(null);
  let navBar, redirect;

  useEffect(() => {
    // if (localStorage.veggieUserAT)
  });

  if (user) {
    navBar = <NavBar />;
  } else {
    redirect = <Redirect to="/login" />;
  }

  return (
    <Layout style={{height:"100%"}}>
      <Router>
        <Content style={{padding:'40px 20px', marginBottom:'46px'}}>
          <Switch>
            <Route exact path="/login" component={Login} />
            {redirect}
            <Route exact path="/" component={Main} />
            <Route exact path="/today/:dayId" component={Today} />
            <Route exact path="/badge" component={Badge} />
            <Route exact path="/setting" component={Setting} />
            <NotFound/>
          </Switch>
        </Content>
        {navBar}
      </Router>
    </Layout>
  );
}

export default App;
