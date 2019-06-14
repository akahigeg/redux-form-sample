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
const SimpleForm = (props: ReduxForm.InjectedFormProps & SimpleFormData)  => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <ReduxForm.Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <ReduxForm.Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
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
  form: 'simple'
})(SimpleForm)