import React from "react";
import styled from "styled-components";

function footer() {
  return (
    <Footer>
      <p>
        All rights reservered <span>&copy;2021</span>
      </p>
    </Footer>
  );
}

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: rgb(48, 44, 44);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: #fff;
  span {
    color: orange;
  }
`;

export default footer;
