import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import WelcomeScreen from './components/welcome_screen';
import { BrowserRouter } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
              <Switch>
                  <Route exact path="/" component={WelcomeScreen} />
              </Switch>
          </div>
        </BrowserRouter>
    )
  }
};