import React, { useEffect } from "react";
import { format } from "date-fns";
import Popup from "reactjs-popup";
import DatePicker from "react-datepicker";
import Dpicon from "../Dpicon/Dpicon";
import "./TaskCalendar.css";
import Ishaan from "../../assets/ishaan.jpg";
import Mayank from "../../assets/mayank.jpg";
import Shrid from "../../assets/shrid.jpg";
import Kartik from "../../assets/kartik.jpg";
const header = [23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3];

class RightCalendar extends React.Component {
  //const RightCalendar = () => {
  constructor(props) {
    super(props);
    this.state = {
      arr: [[], [], [], [], [], [], [], [], [], [], []],
      index: "",
      startDate: new Date("2020/11/23"),
      endDate: new Date("2020/12/03"),
      label: "",
      colour: "",
      name: "",
      tasks: [[], [], []],
      team: "",
    };
  }
  setStartDate = (sdate) => {
    this.setState({ startDate: sdate });
  };
  setEndDate = (edate) => {
    this.setState({ endDate: edate });
  };
  handleLabel = (event) => {
    this.setState({ label: event.target.value });
  };
  handleName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleTeam = (event) => {
    this.setState({ team: event.target.value });
  };

  addtask = (indexdate) => {
    const tarr = this.state.arr.slice();
    var tcolor, timg;
    var sdate, edate;
    // sdatemonth = format(this.state.startDate, "MMM");
    // edatemonth = format(this.state.endDate, "MMM");
    sdate = format(this.state.startDate, "MMM d");
    edate = format(this.state.endDate, "MMM d");

    const temptasks = this.state.tasks.slice();

    if (this.state.team === "Envato Meetup") {
      this.setState({ colour: "#be6ff2" });
      tcolor = "#be6ff2";
    } else if (this.state.team === "Nike Project") {
      this.setState({ colour: "#f19e44" });
      tcolor = "#f19e44";
    } else {
      this.setState({ colour: "#94ecd6" });
      tcolor = "#94ecd6";
    }
    temptasks[0].push(this.state.startDate);
    temptasks[1].push(this.state.endDate);
    temptasks[2].push(tcolor);
    this.setState({ tasks: temptasks });

    if (this.state.name === "Ishaan") {
      timg = Ishaan;
      this.setState({ img: Ishaan });
    } else if (this.state.name === "Mayank") {
      timg = Mayank;
      this.setState({ img: Mayank });
    } else if (this.state.name === "Shrid") {
      timg = Shrid;
      this.setState({ img: Shrid });
    } else {
      timg = Kartik;
      this.setState({ img: Kartik });
    }

    tarr[header.indexOf(parseInt(indexdate))].push(
      <Popup
        trigger={() => (
          <button
            style={{
              background: tcolor,
              width: "100%",
              height: "15px",
              padding: 0,
              border: 0,
            }}
          >
            {" "}
          </button>
        )}
        position="bottom right"
        closeOnDocumentClick
      >
        <div className="tooltip" style={{ display: "flex" }}>
          <div
            style={{
              marginLeft: "10px",
              width: "10px",
              height: "80%",
              marginTop: "7px",
              background: tcolor,
            }}
          ></div>

          <div className="labeldate">
            <div style={{ margin: "auto" }}>
              <h4 style={{ margin: "0" }}>{this.state.label}</h4>
              <p style={{ fontSize: "12px" }}>{`${sdate}- ${edate}`}</p>
            </div>
          </div>
          <div className="dpicon">
            <Dpicon pic={timg} style={{ position: "relative" }} />
          </div>
        </div>
      </Popup>
    );
    this.setState({ arr: tarr });
  };
  addindex = (value) => {
    var sdate;
    if (value >= 23) {
      sdate = `2020/11/${value}`;
    } else {
      sdate = `2020/12/${value}`;
    }
    this.setState({ startDate: new Date(sdate) });
  };
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row " style={{ flex: 1 }}>
          {header.map((addbutton, index) => (
            <div className="taskheaders">
              <Popup
                trigger={
                  <div>
                    <button
                      className="taskbutton"
                      value={addbutton}
                      onClick={(e) => this.addindex(e.target.value)}
                    >
                      {addbutton}
                    </button>
                  </div>
                }
                modal
                nested
                position="center center"
              >
                {(close) => (
                  <div className="modal">
                    {/* <form onSubmit={this.handleSubmit}> */}
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="modaltext" style={{ margin: "auto" }}>
                      <div className="header"> Assign Task</div>
                      <div className="content">
                        <select
                          name="Teammates"
                          id="team"
                          value={this.state.name}
                          onChange={this.handleName}
                        >
                          <option value="Ishaan">Ishaan</option>
                          <option value="Mayank">Mayank</option>
                          <option value="Kartik">Kartik</option>
                          <option value="Shrid">Shrid</option>
                        </select>
                        <input
                          type="text"
                          className="input"
                          value={this.state.label}
                          onChange={this.handleLabel}
                          style={{ margin: "15px 0px" }}
                        ></input>

                        <select
                          name="Teams"
                          id="projs"
                          value={this.state.team}
                          onChange={this.handleTeam}
                        >
                          <option value="Blog Infographic">
                            Blog Infographic
                          </option>
                          <option value="Nike Project">Nike Project</option>
                          <option value="Envato Meetup">Envato Meetup</option>
                        </select>
                        <div style={{ margin: "15px 0px" }}>
                          <DatePicker
                            selected={this.state.startDate}
                            onChange={(date) => this.setStartDate(date)}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                          />
                          <DatePicker
                            selected={this.state.endDate}
                            onChange={(date) => this.setEndDate(date)}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            minDate={this.state.startDate}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="actions">
                      <button
                        className="button"
                        style={{ marginTop: "25px", padding: "10px 20px" }}
                        onClick={() => {
                          index = format(this.state.startDate, "d");
                          this.addtask(index);
                          this.props.callbackFromParent(
                            this.state.team,
                            this.state.tasks,
                            this.state.startDate,
                            this.state.endDate
                          );
                          close();
                        }}
                        // onClick={() => {
                        //   console.log("modal closed ");
                        //   this.props.callbackFromParent(
                        //     this.state.team,
                        //
                        //     this.state.startDate,
                        //     this.state.endDate,
                        //
                        //   );
                        //   close();
                        // }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          ))}
        </div>

        <div className="row" style={{ flex: 20 }}>
          {this.state.arr.map((items, index) => {
            return (
              <div className="taskcols">
                {items.map((subItems, sIndex) => {
                  return <div className="tasks">{subItems}</div>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
    // );
  }
}

export default RightCalendar;
