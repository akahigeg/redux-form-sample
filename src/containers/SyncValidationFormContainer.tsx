import * as React from 'react';
import SyncValidationForm from "../components/SyncValidationForm";

class SyncValidationFormContainer extends React.Component {
  submit = (values: any) => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <SyncValidationForm onSubmit={this.submit} />
  }
}

export default SyncValidationFormContainer;