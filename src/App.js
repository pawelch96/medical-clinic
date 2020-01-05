import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import HomePage from "./pages/homepage";
import StaffPage from "./pages/staff/staffpage";
import ContactPage from "./pages/contact/contactpage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

function App() {
  return (
    <React.Fragment>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/staff" component={StaffPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route component={ErrorBoundary} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
