import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Draft from './Draft';
import Froala from './Froala';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <div className="nav">
            <Link to="/">Draft</Link>
            <Link to="/froala">Froala</Link>
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Draft} />
              <Route path="/froala" component={Froala} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
