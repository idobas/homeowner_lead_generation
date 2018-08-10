import React, {Component} from 'react';
import WelcomeScreenForm from '../containers/welcome_screen_form';

export default class WelcomeScreen extends Component {
    onFormSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <div>
                <h1>Welcome to rent-with-me!</h1>
                <h2>To embark on our journey, we just need a few details:</h2>
                <WelcomeScreenForm onSubmit={this.onFormSubmit}/>
            </div>
        );
    }
}