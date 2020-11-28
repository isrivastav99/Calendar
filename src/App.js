import React from "react";
import RightCalendar from "./components/Calendar/TaskCalendar";
import Calendar from "./components/Calendar/Calendar";
import Navbar from "./components/Navbar/Nav";
import Popupbutton from "./components/Button/Button";
import Dpicon from "./components/Dpicon/Dpicon";
import Ishaan from "./assets/ishaan.jpg";
import "./App.css";

const initialState = {
  PersonName: "",
  TaskName: "",
  StartDate: "",
  EndDate: "",
  TaskColour: "",
  bicount: 0,
  npcount: 0,
  emcount: 0,
  Tasks: [[], [], []],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  myCallback = (team, tasks, sdate, edate) => {
    var tcolor = "";
    if (team === "Blog Infographic") {
      tcolor = "#94ecd6";
      const ct = this.state.bicount + 1;
      this.setState({ bicount: ct });
    } else if (team === "Nike Project") {
      tcolor = "#f19e44";
      const ct = this.state.npcount + 1;
      this.setState({ npcount: ct });
    } else {
      tcolor = "#be6ff2";
      const ct = this.state.emcount + 1;
      this.setState({ emcount: ct });
    }
    this.setState({
      StartDate: sdate,
      EndDate: edate,
      TaskColour: tcolor,
      Tasks: tasks,
    });
  };
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="nav">
            <Navbar />
          </div>
          <div className="mainscreen">
            <div className=" top-nav">
              <div className="name-left">
                <h2>Frank's Planner</h2>
              </div>
              <div className="user-right">
                <h5>Frank Guerrero</h5>
                <div>
                  <Dpicon pic={Ishaan} className="user-dp" />
                </div>
              </div>
            </div>
            <div className="main-calendar">
              <div className="left-calendar">
                <div style={{ marginBottom: "15px" }}>
                  <Calendar tasks={this.state.Tasks} />
                </div>
                <Popupbutton
                  name="Blog Infographic"
                  count={this.state.bicount}
                  style={{ color: "#94ecd6" }}
                />
                <Popupbutton
                  name="Nike Project"
                  count={this.state.npcount}
                  style={{ color: "#f19e44" }}
                />
                <Popupbutton
                  name="Envato Meetup"
                  count={this.state.emcount}
                  style={{ color: "#be6ff2" }}
                />
              </div>
              <div className="right-calendar">
                <RightCalendar callbackFromParent={this.myCallback} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
