import React from "react";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  render() {
    return (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
        <ErrorImageText>Sorry, this page is lost in space...</ErrorImageText>
      </ErrorImageOverlay>
    );
  }
}

export default ErrorBoundary;
