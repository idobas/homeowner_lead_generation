import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import WelcomeScreen from './components/welcome_screen';
import AddressScreen from './components/address_screen';
import { BrowserRouter } from 'react-router-dom';
import ProgressBar from './containers/progress_bar';
import './App.css';


export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <div className='header'>
              <span>Welcome Guest</span>
              <h1>Rent With Me</h1>
              <h3>The #1 home rental platform in the world!</h3>
            </div>
            <Switch>
                <Route exact path="/" component={WelcomeScreen} />
                <Route exact path="/address" component={AddressScreen} />
            </Switch>
            <ProgressBar/>
          </div>
        </BrowserRouter>
    )
  }
};