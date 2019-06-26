import * as React from 'react'
import SimpleFormContainer from "../containers/SimpleFormContainer";

class SimpleFormScreen extends React.Component {
  componentWillMount() {
    console.log("will mount");
  }

  submit = (values: any) => {
    // print the form values to the console
    console.log(values)
  }

  render() {
    return <SimpleFormContainer onSubmit={this.submit} />
  }
}

export default SimpleFormScreen;