import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  return (
    <Layout style={{height:"100%"}}>
      <Router>
        <Content style={{padding:'40px 20px'}}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/today/:dayId" component={Today} />
            <Route exact path="/badge" component={Badge} />
            <Route exact path="/setting" component={Setting} />
            <NotFound/>
          </Switch>
        </Content>
        <NavBar />
      </Router>
    </Layout>
  );
}

export default App;
