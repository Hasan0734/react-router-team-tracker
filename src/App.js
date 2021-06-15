import React from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import TeamDetails from './components/TeamDetails/TeamDetails'; 
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/team-info/team-id-:teamId">
          <TeamDetails/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
