import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextInput } from './inputs';

let PayslipForm = props => (
  <form onSubmit={props.handleSubmit} className="uk-form-stacked">
    <Field
      name="firstName"
      placeholder="First Name"
      component={TextInput}
      type="text"
    />
    <Field
      name="lastName"
      placeholder="Last Name"
      component={TextInput}
      type="text"
    />
    <Field
      name="annualSalary"
      placeholder="Annual Salary"
      component={TextInput}
      type="number"
    />
    <Field
      name="superRate"
      placeholder="Super Rate"
      component={TextInput}
      type="number"
    />
    <Field
      name="startDate"
      placeholder="Start Date"
      component={TextInput}
      type="date"
    />
    {props.submitError && (
      <p className="ui-width-1-1 uk-text-danger uk-text-center">
        {props.submitError}
      </p>
    )}
    <button
      className="button uk-button uk-button-primary uk-align-center uk-width-1-1"
      type="submit"
    >
      {props.requestStatus === 'requesting'
        ? 'Generating Payslip'
        : 'Generate Payslip'}
    </button>
  </form>
);

function validate(values) {
  const errors = {};
  if (!values.firstName) {
    errors._error = errors._error || 'Please Enter Your First Name';
    errors.firstName = 'Please Enter Your First Name';
  }
  if (!values.lastName) {
    errors._error = errors._error || 'Please Enter Your Last Name';
    errors.lastName = 'Please Enter Your Last Name';
  }
  if (!values.annualSalary) {
    errors._error = errors._error || 'Please Enter Your Annual Salary';
    errors.annualSalary = 'Please Enter Your Annual Salary';
  }
  if (!values.superRate || values.superRate > 12) {
    errors._error =
      errors._error || 'Please Enter The Super Rate Between (0-12%)';
    errors.superRate = 'Please Enter The Super Rate Between (0-12%)';
  }
  if (!values.startDate) {
    errors._error = errors._error || 'Please Enter Your Start Date';
    errors.startDate = 'Please Enter Your Start Date';
  }
  return errors;
}

PayslipForm = reduxForm({
  form: 'PayslipForm',
  validate,
})(PayslipForm);

export { PayslipForm };
