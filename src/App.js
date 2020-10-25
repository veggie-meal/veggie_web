import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Layout} from "antd";
import Main from './pages/Main';
import Today from './pages/Today';
import Badge from './pages/Badge';
import Setting from './pages/Setting';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout style={{minHeight:"100vh"}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/today/:dayId" component={Today} />
          <Route exact path="/badge">
            <Badge />
          </Route>
          <Route exact path="/setting">
            <Setting />
          </Route>
          <NotFound/>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
