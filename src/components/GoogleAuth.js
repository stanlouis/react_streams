import React, { Component } from "react";

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton = () => {
    const { isSignedIn } = this.state;
    if (isSignedIn === null) {
      return <div>I don't know if we are signed in</div>;
    } else if (isSignedIn) {
      return <div>I am signed in!</div>;
    } else return <div>I am not signed in</div>;
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
