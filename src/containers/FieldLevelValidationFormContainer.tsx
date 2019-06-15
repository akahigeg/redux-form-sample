import * as React from 'react';
import FieldLevelValidationForm from "../components/FieldLevelValidationForm";

class FieldLevelValidationFormContainer extends React.Component {
  submit = (values: any) => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <FieldLevelValidationForm onSubmit={this.submit} />
  }
}

export default FieldLevelValidationFormContainer;
