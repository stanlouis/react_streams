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
          // Dynamically update auth state
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () =>
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });

  onSignIn = () => this.auth.signIn();
  onSignOut = () => this.auth.signOut();

  renderAuthButton = () => {
    const { isSignedIn } = this.state;
    return isSignedIn === null ? null : isSignedIn ? (
      <button className="ui red google button" onClick={this.onSignOut}>
        <i className="google icon" />
        Sign Out
      </button>
    ) : (
      <button className="ui red google button" onClick={this.onSignIn}>
        <i className="google icon" />
        Sign In With Google
      </button>
    );
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
