import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

// Object destructuring
function Team({ data }) {
  return (
    <TeamCard>
      <TeamContent>
        <User className="user">
          <FontAwesomeIcon icon={faUser} className="user" />
        </User>
        <p className="name">{data.name}</p>
        {data.title && <p className="title">{data.title}</p>}
        <p className="description">{data.description}</p>
        <SocialLinks>
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          <FontAwesomeIcon icon={faGithub} className="icon github" />
          <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
          <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
        </SocialLinks>
      </TeamContent>
    </TeamCard>
  );
}

const TeamCard = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 150px;
  background-color: #cccccc;
  color: #111;
  box-shadow: -2px -2px 4px -4px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
const TeamContent = styled.div`
  width: 100%;
  padding: 10px 4px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif Helvetica, sans-serif;
  .name {
    text-align: center;
    margin: 5px;
    font-size: 0.9rem;
    color: #111;
  }
  .title {
    text-align: center;
    margin: 5px;
    font-size: 0.7rem;
    color: #676363;
  }
  .description {
    text-align: left;
    margin: 5px;
    font-size: 0.6rem;
    color: #111;
    font-family: "Trebuchet MS";
  }
`;
const User = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #cfcfcf;
  background-color: #827c7c;
  display: grid;
  place-items: center;
  margin: auto;

  .user {
    width: 75%;
    height: 75%;
    color: #131010;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 10px;
  .icon {
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
  .facebook {
    color: #2626f7;
  }
  .instagram {
    color: #f93a00;
  }
  .linkedin {
    color: #2626f7;
  }
  .github {
    color: #18181f;
  }
`;
export default Team;
