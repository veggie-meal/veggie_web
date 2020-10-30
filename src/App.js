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
import SignUp from './pages/SignUp';

const { Content } = Layout;

function App() {
  const [user, setUser] = useState(null); // 초기 값 로컬스토리지에서 받아오기. 없으면 null
  let navBar;

  useEffect(() => {
    //
  });

  function authenticateUser() {
    setUser(1); // 임시
    // 류저 정보 들어오면 로컬스토리지에 추가한 후 state 업데이트
  }

  if (user) {
    navBar = <NavBar />;
  }

  return (
    <Layout style={{height:"100%"}}>
      <Router>
        <Content style={{padding:'40px 20px', marginBottom:'46px'}}>
          <Switch>
            <Route exact path="/login">
              <Login authenticateUser={authenticateUser} />
            </Route>
            <Route exact path="/SignUp">
              <SignUp/>
            </Route>
            <Route exact path="/">
              {user ? <Main /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/today/:dayId">
              {user ? <Today /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/badge" component={Badge}>
              {user ? <Badge /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/setting" component={Setting}>
              {user ? <Setting /> : <Redirect to="/login" />}
            </Route>
            <NotFound/>
          </Switch>
        </Content>
        {navBar}
      </Router>
    </Layout>
  );
}

export default App;
