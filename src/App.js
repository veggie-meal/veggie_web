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

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/today">
            <Today />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
