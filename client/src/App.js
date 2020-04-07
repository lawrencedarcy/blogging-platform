import React from 'react';
import NavBar from './NavBar/NavBar';
import Dashboard from './Dashboard/Dashboard';
import Create from './Create/Create';
import { Route, Switch } from 'react-router-dom';
import Article from './Article/Article'
import './App.css';

function App() {
  return (
    <div className="app-body">
      <NavBar />      
      <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/write" component={Create} />
      <Route path="/article/:article" render={props => <Article  props={props}/> } />

      </Switch>
    </div>
  );
}

export default App;
