import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Layout} from "antd";
import Main from './pages/Main';
import Today from './pages/Today';
import Badge from './pages/Badge';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout style={{minHeight:"100vh"}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/today">
            <Today />
          </Route>
          <Route exact path="/badge">
            <Badge />
          </Route>
          <NotFound/>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
