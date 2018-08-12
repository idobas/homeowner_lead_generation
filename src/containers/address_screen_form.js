import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import LocationSearchInput from '../components/places_autocomplete';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import './addresses_screen.css';

class AddressScreenForm extends Component {
    render() {
        return (
            <form className="welcomeScreenForm">
                <div className="addressInput">
                    <Field name="address" component={LocationSearchInput} props={{text: 'Address'}} type="text"/>
                </div>
                <div className="submitButton">
                    <Button disabled={!this.props.isAddressValid} variant="contained" color="primary" type="submit">Check Zestimate!</Button>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAddressValid: state.addresses.isInMaps
    }
}

export default reduxForm({
    form: 'addressScreenForm'
})(connect(mapStateToProps)(AddressScreenForm));
