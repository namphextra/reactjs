import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import SignIn from './pages/auth/SignIn';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/sign-in">
        <SignIn />
      </Route>
    </Switch>
  </Router>
);

export default App;
