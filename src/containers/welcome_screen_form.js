import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';



const validate = values => {
    const errors = {}
    const requiredFields = [ 'firstName', 'lastName', 'email']
    requiredFields.forEach(field => {
      if (!values[ field ]) {
        errors[ field ] = 'Required'
      }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  }

const renderTextField = ({ inputType, text, input, label, meta: { touched, error }, ...custom }) => (
    <TextField
        label={text}
        helperText={touched && error}
        error={touched && error ? true : false}
        {...input}
        {...custom}
        InputProps= {{
            inputComponent: inputType === 'phone' ? NumberFormatCustom : null
        }}
    />
)

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        ref={inputRef}
        format="+1 (###) ###-####" 
        mask="_"
      />
    );
  }

class WelcomeScreenForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="firstName" component={renderTextField} props={{text: 'First Name'}} type="text"/>
        </div>
        <div>
          <Field name="lastName" component={renderTextField} props={{text: 'Last Name'}} type="text"/>
        </div>
        <div>
          <Field name="email" component={renderTextField} props={{text: 'Email'}} type="email"/>
        </div>
        <div>
          <Field name="phone" component={renderTextField} props={{text: 'Phone Number', inputType: 'phone'}} type="text"/>
        </div>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    );
  }
}

// Decorate the form component
WelcomeScreenForm = reduxForm({
  form: 'welcomeScreenForm', // a unique name for this form
  validate 
})(WelcomeScreenForm);

export default WelcomeScreenForm;

