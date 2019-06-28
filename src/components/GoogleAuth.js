import React from "react";
import { CLIENT_ID } from "../Client";
class GoogleAuth extends React.Component {
  state = { isSignedIn: null, userName: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
      userName: this.auth.currentUser
        .get()
        .getBasicProfile()
        .getName()
    });
  };
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <div className="">
          {this.state.userName}
          <button
            className="ui right floated button red google"
            onClick={this.onSignOutClick}
          >
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="">
          <button
            className="ui right floated button red google"
            onClick={this.onSignInClick}
          >
            <i className="google icon" />
            Sign In with Google
          </button>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
export default GoogleAuth;
