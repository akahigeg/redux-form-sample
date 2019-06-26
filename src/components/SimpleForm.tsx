import * as React from 'react'
import * as ReduxForm from 'redux-form'

// interface SimpleFormProps {
//   name: string; // ?
// }

interface SimpleFormData {
  firstName: string;
  lastName: string;
}

// const SimpleForm = (props: ReduxForm.InjectedFormProps<SimpleFormData>)  => { こう言う例が見られるけど動かない・・・
// って思ったらclassを使った時の書き方か https://stackoverflow.com/questions/48379435/redux-form-props-typescript/48432189
const SimpleForm: React.SFC<ReduxForm.InjectedFormProps> = (props: ReduxForm.InjectedFormProps & SimpleFormData)  => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <h3>Simple Form</h3>
      <div className="field">
        <label>First Name {props.firstName}</label>
        <div>
          <ReduxForm.Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div className="field">
        <label>Last Name {props.lastName}</label>
        <div>
          <ReduxForm.Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="button-area">
        <button type="submit" className="ui button" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" className="ui button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default SimpleForm;
