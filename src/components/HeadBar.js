import React from "react";
import GoogleAuth from "./GoogleAuth";
class HeadBar extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui secondary pointing meny">
          <div className="right menu">
            <button className="ui button">Google Sign in</button>
            <button className="ui button">Sign Out</button>
          </div>
        </div>
        <GoogleAuth />
      </div>
    );
  }
}

export default HeadBar;
