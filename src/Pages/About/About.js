import { Paper } from "@mui/material";
import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="aboutPage">
      <div className="title">About This App</div>
      <Paper style={{ padding: "5px 25px", margin: "5px" }}>
        <p>Created By: Subrat</p>
        <p>
          Github:{" "}
          <a href="https://github.com/subratsir">
            https://github.com/subratsir
          </a>
        </p>
        <p>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/subrata-ku-das/">
            https://www.linkedin.com/in/subrata-ku-das/
          </a>
        </p>
        <p>
          Twitter:{" "}
          <a href="https://twitter.com/SubratSirIndia">@SubratSirIndia</a>
        </p>
      </Paper>
      <h2>Implemented Features</h2>
      <Paper style={{ padding: "5px 25px", margin: "5px" }}>
        <ul>
          <li>
            Get Information About Daily Trending Movies and Tv Series All Over
            The World
          </li>
          <li>Search Information About Any Movie or Tv Series</li>
        </ul>
      </Paper>
      <h2>Upcomming Features</h2>
      <Paper style={{ padding: "5px 25px", margin: "5px" }}>
        <ul>
          <li>Rock Paper Scissors Game</li>
          <li>Tic Tac Toe Game</li>
          <li>Weather Forecast</li>
          <li>Covid Tracker</li>
        </ul>
      </Paper>
    </div>
  );
};

export default About;
