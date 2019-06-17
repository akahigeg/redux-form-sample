import * as React from 'react'
import * as ReduxForm from 'redux-form'

const required = (value: any) => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const minLength = (min :number) => (value: string) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength2 = minLength(2)
const isNumber = (value: any) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = (min :number) => (value: number) =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue13 = minValue(13)
const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooYoung = (value: number) =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined
const aol = (value: string) =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
const alphaNumeric = (value: string) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
const phoneNumber = (value: string) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

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

const FieldLevelValidationForm = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <h3>FieldLevelValidationForm</h3>
      <div className="field">
        <label>Username</label>
      <ReduxForm.Field
        name="username"
        type="text"
        component={renderField}
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      /></div>
      <div className="field">
        <label>Email</label>
      <ReduxForm.Field
        name="email"
        type="email"
        component={renderField}
        validate={email}
        warn={aol}
      /></div>
      <div className="field">
        <label>Age</label>
      <ReduxForm.Field
        name="age"
        type="number"
        component={renderField}
        validate={[required, isNumber, minValue13]}
        warn={tooYoung}
      /></div>
      <div className="field">
        <label>Phone number</label>
      <ReduxForm.Field
        name="phone"
        type="number"
        component={renderField}
        validate={[required, phoneNumber]}
      /></div>
      <div className="button-area">
        <button type="submit" disabled={submitting} className="ui button">
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="ui button">
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default ReduxForm.reduxForm({
  form: 'fieldLevelValidation'
})(FieldLevelValidationForm)