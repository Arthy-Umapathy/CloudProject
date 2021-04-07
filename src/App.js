import React, { Component } from "react";
import './App.css';
import SignIn from './Components/Profile/SignIn';
import SignUp from './Components/Profile/SignUp';
import './Components/UploadFile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HashRouter } from "react-router-dom";
import UploadFile from "./Components/UploadFile";

class App extends Component {
  render() {
    return (
      <Router className="container">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path='/uploadfile' component={UploadFile}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
