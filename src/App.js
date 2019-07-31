import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Draft from './Draft';
import Froala from './Froala';
import ReactRTE from './ReactRTE';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <div className="nav">
            <Link to="/">Draft</Link>
            <Link to="/froala">Froala</Link>
            <Link to="/react-rte">React RTE</Link>
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Draft} />
              <Route path="/froala" component={Froala} />
              <Route path="/react-rte" component={ReactRTE} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
