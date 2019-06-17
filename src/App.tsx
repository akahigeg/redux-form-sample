import * as React from "react";
import "./App.css";
import { Link } from "react-router-dom"

import logo from "./logo.svg";

const App: React.SFC<{}> = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="content">
    {props.children}
    </div>
    <footer>
      <Link to="/">Simple</Link> | <Link to="/sync-validation">SyncValidation</Link> | <Link to="/field-level-validation">FieldLevelValidation</Link>
    </footer>
  </div>
);

export default App;
