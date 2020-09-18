import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Nav from './components/navigation/nav';

const App = () => {
  return (
    <div data-testid='app-test'>
      <Router>
        <Nav />
        <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
          <Redirect exact from='/' to='dashboard' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
