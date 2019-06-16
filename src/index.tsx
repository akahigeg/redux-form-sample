import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router"; // react-router v4/v5
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import SimpleFormContainer from "./containers/SimpleFormContainer";
import SyncValidationFormContainer from "./containers/SyncValidationFormContainer";
import FieldLevelValidationFormContainer from "./containers/FieldLevelValidationFormContainer";
import App from "./App";

const initialState = {
  form: {}
};

const store = configureStore(initialState);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
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
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
