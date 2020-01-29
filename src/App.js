import React, { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
// import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const StaffPage = lazy(() => import("./pages/staff/staffpage"));
const AppointmentPage = lazy(() => import("./pages/appointment/appointment"));
const ContactPage = lazy(() => import("./pages/contact/contactpage"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up")
);

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/staff" component={StaffPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/appointments" component={AppointmentPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                }
              />
            </Suspense>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
