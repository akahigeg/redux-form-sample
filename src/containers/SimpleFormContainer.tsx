import * as React from 'react';
import SimpleForm from "../components/SimpleForm";

class SimpleFormContainer extends React.Component {
  submit = (values: any) => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <SimpleForm onSubmit={this.submit} />
  }
}

export default SimpleFormContainer;