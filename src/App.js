import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import axios from 'axios';

import * as config from './config';

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
  const [userId, setUserId] = useState(localStorage.getItem('veggieUserId'));
  const [userToken, setUserToken] = useState(localStorage.getItem('veggieUserToken'));
  const [userName, setUserName] = useState(localStorage.getItem('veggieUserName'));
  const [isNewUser, setIsNewUser] = useState(false);
  const [userGoal, setUserGoal] = useState('');

  function authenticateUser(id, token, name, code) {
    if (code === 2) {
      setUserId(id);
      setUserToken(token);
      setUserName(name);
      setIsNewUser(true);
    } else {
      setUserId(id);
      setUserToken(token);
      setUserName(name);
      localStorage.setItem('veggieUserId', id);
      localStorage.setItem('veggieUserToken', token);
      localStorage.setItem('veggieUserName', name);
      axios.post(config.API_ADDR + 'user/data', { userId })
      .then(function(res) {
        console.log(res);
        setUserGoal(res.data.userData[0].vegan_type);
      })
      .catch(function(err) {
        console.log(err);
      });
    }
  }

  function checkUser() {
    if (userId && userToken && userName) {
      return true;
    } else {
      return false;
    }
  }

  function signUp() {
    setIsNewUser(false);
  }

  return (
    <Layout style={{height:"100%"}}>
      <Router>
        <Content style={{padding:'40px 20px'}}>
          <Switch>
            <Route exact path="/signup">
              <SignUp id={userId} token={userToken} name={userName} signUp={signUp} />
            </Route>
            {isNewUser ? <Redirect to="signup" /> : null}
            <Route exact path="/login">
              <Login authenticateUser={authenticateUser} />
            </Route>
            <Route exact path="/">
              {checkUser() ? <Main id={userId} token={userToken} name={userName} goal={userGoal} /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/today/:dayId">
              {checkUser() ? <Today id={userId} token={userToken} name={userName} goal={userGoal} /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/badge" component={Badge}>
              {checkUser() ? <Badge id={userId} token={userToken} name={userName} goal={userGoal} /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/setting" component={Setting}>
              {checkUser() ? <Setting id={userId} token={userToken} name={userName} goal={userGoal} /> : <Redirect to="/login" />}
            </Route>
            <NotFound/>
          </Switch>
        </Content>
        {checkUser() && !isNewUser ? <NavBar /> : null}
      </Router>
    </Layout>
  );
}

export default App;
