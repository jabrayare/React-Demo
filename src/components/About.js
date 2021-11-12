import React from "react";
import Team from "./Team";
import "./about.css";
import styled from "styled-components";

function About() {
  return (
    <div className="about">
      <Content>
        <h1>Meet Our Team</h1>

        <Team />
      </Content>
    </div>
  );
}
const Content = styled.div`
  width: 80%;
  margin: auto;
`;
export default About;
