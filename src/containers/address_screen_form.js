import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import LocationSearchInput from '../components/places_autocomplete';

const renderTextField = ({ inputType, text, input, label, meta: { touched, error }, ...custom }) => (
    <LocationSearchInput/>
)

class AddressScreenForm extends Component {
    render() {
        return (
            <form className="welcomeScreenForm">
                <div className="textField">
                    <Field name="address" component={renderTextField} props={{text: 'Address'}} type="text"/>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'addressScreenForm'
})(AddressScreenForm);
