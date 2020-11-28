import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "./Button.css";
class Popupbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tasks">
        <button className="tasks-groups">
          {" "}
          <div className="button-body">
            <i className="fa fas-fw fa-circle" style={this.props.style}></i>
            <div className="button-description">
              <p className="text">{this.props.name}</p>
              <p className="taskcount">{`${this.props.count} tasks`}</p>
            </div>
            <i className="fa fas-fw fa-ellipsis-h more"></i>
          </div>
        </button>
      </div>
    );
  }
}
export default Popupbutton;
