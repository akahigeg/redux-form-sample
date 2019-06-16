import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import SimpleFormContainer from "./containers/SimpleFormContainer";
import SyncValidationFormContainer from "./containers/SyncValidationFormContainer";
import FieldLevelValidationFormContainer from "./containers/FieldLevelValidationFormContainer";

import logo from "./logo.svg";

const App: React.SFC<{}> = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Switch>
      <Route path="/" exact={true} component={SimpleFormContainer} />
      <Route
        path="/sync-validation/"
        exact={true}
        component={SyncValidationFormContainer}
      />
      <Route
        path="/field-level-validation/"
        component={FieldLevelValidationFormContainer}
      />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
