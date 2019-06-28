import React from "react";
import GoogleAuth from "./GoogleAuth";
class HeadBar extends React.Component {
  render() {
    return (
      <div className="ui clearing segment">
        <GoogleAuth />
      </div>
    );
  }
}

export default HeadBar;
