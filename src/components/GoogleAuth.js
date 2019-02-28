import React, { Component } from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          // Dynamically update auth state
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    const { signIn, signOut } = this.props;
    if (isSignedIn) {
      signIn(this.auth.currentUser.get().getId());
    } else {
      signOut();
    }
  };

  onSignInClick = () => this.auth.signIn();
  onSignOutClick = () => this.auth.signOut();

  renderAuthButton = () => {
    const { isSignedIn } = this.props;
    return isSignedIn === null ? null : isSignedIn ? (
      <button className="ui red google button" onClick={this.onSignOutClick}>
        <i className="google icon" />
        Sign Out
      </button>
    ) : (
      <button className="ui red google button" onClick={this.onSignInClick}>
        <i className="google icon" />
        Sign In With Google
      </button>
    );
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapSateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapSateToProps,
  { signIn, signOut }
)(GoogleAuth);
