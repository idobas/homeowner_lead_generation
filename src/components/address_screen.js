import React, {Component} from 'react';
import AddressScreenForm from '../containers/address_screen_form';

export default class AddressScreen extends Component {
    render() {
        return (
            <div>
                <p>What is the address you are looking for?</p>
                <AddressScreenForm/>
            </div>
        )
    }
}