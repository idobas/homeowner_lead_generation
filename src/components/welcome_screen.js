import React, {Component} from 'react';
import WelcomeScreenForm from '../containers/welcome_screen_form';
import './welcome_screen.css';
import {withRouter} from 'react-router-dom';

class WelcomeScreen extends Component {
    componentWillMount() {
        // TODO: this should dispatch an action to change the progress of the bar
        this.props.history.listen(() => console.log(this.props.history.location.pathname));
    }

    render() {
        return (
            <div>
                <p>Please provide the following details to start the journey to your new home:</p>
                <WelcomeScreenForm/>
            </div>
        );
    }
}

export default withRouter(WelcomeScreen);