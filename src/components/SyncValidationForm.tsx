import * as React from 'react'
import * as ReduxForm from 'redux-form'

interface FormValues {
  username: string;
  email: string;
  age: number;
}

interface FormErrors {
  username?: string;
  email?: string;
  age?: string;
}

const validate = (values: FormValues) => {
  const errors: FormErrors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const warn = (values: FormValues) => {
  const warnings: FormErrors = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}
const renderField = (props: any) => (
  <div>
    <label>{props.label}</label>
    <div>
      <input {...props.input} placeholder={props.label} type={props.type} />
      {props.touched &&
        ((props.error && <span>{props.error}</span>) ||
          (props.warning && <span>{props.warning}</span>))}
    </div>
  </div>
)

const SyncValidationForm = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <h3>SyncValidationForm</h3>
      <ReduxForm.Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <ReduxForm.Field name="email" type="email" component={renderField} label="Email" />
      <ReduxForm.Field name="age" type="number" component={renderField} label="Age" />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default ReduxForm.reduxForm({
  form: 'syncvalidation', validate, warn
})(SyncValidationForm)