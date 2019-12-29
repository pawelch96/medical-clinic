import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage";
import StaffPage from "./pages/staffpage";
import ContactPage from "./pages/contactpage";
import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/staff" component={StaffPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={ErrorBoundary} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
