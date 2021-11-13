import ReactDOM from "react-dom";
import React, { Component } from "react";
//import React from "react";
import "./home.css";
import osuLogo from "../images/osu.png";
import cseLogo from "../images/osu_cse.jpg";
import { faHome } from "@fortawesome/free-solid-svg-icons";

//Class Based Component
//Class based component gets rendered already,
//so don't need to render separately like function components
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="header">
          <img
            src={osuLogo}
            alt="OSU"
            style={{ width: 300, height: 200, top: 20, left: 15 }}
          ></img>
          <img
            src={cseLogo}
            alt="OSU_CSE"
            style={{
              width: 400,
              height: 125,
              top: 70,
              right: 15,
              position: "absolute",
            }}
          ></img>
        </div>
        <div className="content">
          <h1>General Statement</h1>
          <p>
            Ohio State’s Department of Computer Science and Engineering has
            excelled in both research and education since 1968. Ranked among the
            top computer science departments at public institutions in the
            United States by the National Research Council and by U.S. News &
            World Report, the department provides an outstanding educational
            experience to 900 undergraduate and 300 graduate students from
            across the globe. The mission of the Computer Science and
            Engineering Graduate Program is to develop researchers, educators
            and practicing professionals with advanced skills in computing.
            Students can pursue a master’s degree, a doctoral degree or both.
          </p>

          <br />

          <h1>Mission Statement</h1>
          <p>
            The Department of Computer Science and Engineering will impact the
            information age as a national leader in computing research and
            education. We will prepare computing graduates who are highly sought
            after, productive, and well-respected for their work, and who
            contribute to new developments in computing. We will give students
            in other disciplines an appropriate foundation in computing for
            their education, research, and experiences after graduation,
            consistent with computing's increasingly fundamental role in
            society. In our areas of research focus, we will contribute key
            ideas to the development of the computing basis of the information
            age, advancing the state of the art for the benefit of society, the
            State of Ohio, and The Ohio State University. We will work with key
            academic partners within and outside of OSU, and with key industrial
            partners, in pursuit of our research and educational endeavors.
          </p>
        </div>
      </div>
    );
  }
}

//Function Based Component
function GsMsComp() {
  return (
    <div>
      <h1>General Statement</h1>
      <p>
        Ohio State’s Department of Computer Science and Engineering has excelled
        in both research and education since 1968. Ranked among the top computer
        science departments at public institutions in the United States by the
        National Research Council and by U.S. News & World Report, the
        department provides an outstanding educational experience to 900
        undergraduate and 300 graduate students from across the globe. The
        mission of the Computer Science and Engineering Graduate Program is to
        develop researchers, educators and practicing professionals with
        advanced skills in computing. Students can pursue a master’s degree, a
        doctoral degree or both.
      </p>

      <br />

      <h1>Mission Statement</h1>
      <p>
        The Department of Computer Science and Engineering will impact the
        information age as a national leader in computing research and
        education. We will prepare computing graduates who are highly sought
        after, productive, and well-respected for their work, and who contribute
        to new developments in computing. We will give students in other
        disciplines an appropriate foundation in computing for their education,
        research, and experiences after graduation, consistent with computing's
        increasingly fundamental role in society. In our areas of research
        focus, we will contribute key ideas to the development of the computing
        basis of the information age, advancing the state of the art for the
        benefit of society, the State of Ohio, and The Ohio State University. We
        will work with key academic partners within and outside of OSU, and with
        key industrial partners, in pursuit of our research and educational
        endeavors.
      </p>
    </div>
  );
}

function Option1() {
  return <h1>Hello1</h1>;
}

function Option2() {
  return <h1>Hello2</h1>;
}

//Part 4
//Conditional Rendering
//const val = true;
//const op1 = <Option1/>;
//(val ? ReactDOM.render(op1, document.getElementById('root')) : ReactDOM.render(op1, document.getElementById('root')));

//Part 3
//Rendering function component
//const gsMs = <GsMsComp/>;
//ReactDOM.render(gsMs, document.getElementById('root'));
//export default GsMsComp;

//Part 2
//Embedding expressions in JSX
//const name = 'CSE Student';
//const name_element = <h1>Hello, {name}</h1>;
//ReactDOM.render(name_element, document.getElementById('root'));

//Part 1
//rendering element
//const individual_element = <h1>Hello, world</h1>; //This is jsx
//ReactDOM.render(individual_element, document.getElementById('root'));
