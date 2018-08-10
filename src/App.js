import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import WelcomeScreen from './components/welcome_screen';
import { BrowserRouter } from 'react-router-dom';
import ProgressBar from './containers/progress_bar';


export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <h1>Rent-With-Me</h1>
            <Switch>
                <Route exact path="/" component={WelcomeScreen} />
            </Switch>
            <ProgressBar/>
          </div>
        </BrowserRouter>
    )
  }
};