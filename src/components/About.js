import React, { useState, useEffect } from "react";
import Team from "./Team";
import "./about.css";
import styled from "styled-components";

function About() {
  const [member, setMember] = useState([]);
  useEffect(() => {
    fetch("./TeamMembers.json").then((res) =>
      res.json().then((data) => setMember(data))
    );
  }, []);
  console.log(member);
  return (
    <div className="about">
      <Content>
        <h1>Meet Our Team</h1>
        <TeamControl>
          {member.map((user) => (
            <Team data={user} />
          ))}
        </TeamControl>
      </Content>
    </div>
  );
}
const Content = styled.div`
  h1 {
    text-align: center;
    margin: 20px;
  }
  width: 60%;
  margin: auto;
`;
const TeamControl = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
export default About;
