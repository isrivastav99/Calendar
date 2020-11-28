import React from "react";
import {
  format,
  addDays,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  isSameMonth,
  addMonths,
  subMonths,
  endOfMonth,
  isSameDay,
  parse,
  isEqual,
  isAfter,
  isBefore,
} from "date-fns";
import "./Calendar.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      colour: "#fff",
    };
  }

  renderHeader() {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "EEEEE";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    var Tasks = this.props.tasks;
    var n = Tasks[0].length;
    var clr = "#fff";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        var j;
        formattedDate = format(day, dateFormat);
        var found = false;
        for (j = 0; j < n; j++) {
          //console.log(`${Tasks[0][j]} ${Tasks[1][j]}`);
          if (
            (isBefore(day, Tasks[1][j]) || isEqual(day, Tasks[1][j])) &&
            (isAfter(day, Tasks[0][j]) || isEqual(day, Tasks[0][j]))
          ) {
            found = true;
            clr = Tasks[2][j];
            //console.log(`${Tasks[0][j]} ${Tasks[2][j]}`);
            // console.log(formattedDate);

            //this.setState({ colour: Tasks[2][i] });
          }
        }
        if (!found) clr = "#fff";
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            style={{
              background: `${!isSameMonth(day, monthStart) ? "#fff" : clr}`,
            }}
            key={day}
            onClick={() => this.onDateClick(parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );

      days = [];
    }
    //s this.setState({ colour: clr });
    return <div className="body">{rows}</div>;
  }

  onDateClick = (day) => {
    this.setState({
      selectedDate: day,
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1),
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        <div className="mbody">
          {this.renderDays()}
          {this.renderCells()}
        </div>
      </div>
    );
  }
}

export default Calendar;
