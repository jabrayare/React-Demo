import React, { useState, useEffect } from "react";
import Team from "./Team";
import "./about.css";
import styled from "styled-components";

function About() {
  const [member, setMember] = useState([]);
  const [input, setInput] = useState([]);
  useEffect(() => {
    fetch("./TeamMembers.json").then((res) =>
      res.json().then((data) => setMember(data))
    );
  }, []);
  console.log(member);
  return (
    <div className="about">
      <h1
        style={{
          "text-align": "center",
          margin: "20px",
          color: "red",
        }}
      >
        Meet Our Team
      </h1>
      <Content>
        <TeamControl>
          {member
            .filter((val) => {
              if (input == "") {
                return val;
              } else if (val.name.toLowerCase().includes(input.toLowerCase())) {
                return val;
              }
            })
            .map((user) => (
              <Team data={user} />
            ))}
        </TeamControl>
        <SearchControl>
          <input
            type="text"
            placeholder="Search for member..."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </SearchControl>
      </Content>
    </div>
  );
}
const Content = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  padding: 10px 20px;
`;
const TeamControl = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  /* margin-bottom: 20px; */
`;
const SearchControl = styled.div`
  width: 30%;
  /* background-color: red; */
  input {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #cccccc;
    border-radius: 20px;
    outline: none;
    color: #333;
    margin-top: 20px;
  }
`;
export default About;
