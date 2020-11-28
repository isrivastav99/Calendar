import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "font-awesome/css/font-awesome.min.css";
import "./Nav.css";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class Navbar extends React.Component {
  render() {
    return (
      <SideNav onSelect={(selected) => {}}>
        <div className="navbar">
          <SideNav.Nav defaultSelected="home">
            <NavItem
              eventKey="charts"
              navitemStyle={{ paddingTop: "20px", marginBottom: "150px" }}
            >
              <NavIcon>
                <i
                  className="fa fas-fw fa-fire"
                  style={{
                    fontSize: "1.75em",
                    color: "#dd3e21",
                    padding: "6px",
                    marginTop: "3px",
                  }}
                />
              </NavIcon>
              <NavText>Charts</NavText>
            </NavItem>

            <NavItem eventKey="charts">
              <NavIcon>
                <i
                  className="fa fas-fw fa-line-chart"
                  style={{
                    fontSize: "1.75em",
                    color: "#fff",
                    background: "#dd3e21",
                    padding: "6px",
                  }}
                />
              </NavIcon>
              <NavText>Charts</NavText>
            </NavItem>

            <NavItem eventKey="linechart">
              <NavIcon>
                <i
                  className="fa fas-fw fa-home"
                  style={{ fontSize: "1.75em", color: "#bbc5cf" }}
                />
              </NavIcon>
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="linechart">
              <NavIcon>
                <i
                  className="fa fas-fw fa-home"
                  style={{ fontSize: "1.75em", color: "#bbc5cf" }}
                />
              </NavIcon>
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="linechart">
              <NavIcon>
                <i
                  className="fa fas-fw fa-home"
                  style={{ fontSize: "1.75em", color: "#bbc5cf" }}
                />
              </NavIcon>
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="barchart">
              <NavIcon>
                <i
                  className="fa fas-fw fa-home"
                  style={{ fontSize: "1.75em", color: "#bbc5cf" }}
                />
              </NavIcon>
              <NavText>Bar Chart</NavText>
            </NavItem>
          </SideNav.Nav>
        </div>
      </SideNav>
    );
  }
}
export default Navbar;
