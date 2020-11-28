import React from "react";

import "./Dpicon.css";

class Dpicon extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "12px", marginLeft: "10px" }}>
        <img src={this.props.pic} className="dp"></img>
      </div>
    );
  }
}
export default Dpicon;
