import React, { Component } from "react";
import './App.css';
import './Components/UploadFile';
import SinglePage from './Components/SinglePage/SinglePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router className="container">
        <Switch>
          <Route exact path='/' component={SinglePage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
