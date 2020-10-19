import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './pages/Main';
import Today from './pages/Today';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/today">
            <Today />
          </Route>
        </Switch>
        <nav>
          <Link to="/">Main</Link>
          <Link to="/today">Today</Link>
        </nav>
      </Router>
    </div>
  );
}

export default App;
