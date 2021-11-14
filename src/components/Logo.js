import React from "react";
import osuLogo from "../images/osu.png";
import cseLogo from "../images/osu_cse.jpg";

function Logo() {
  return (
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
  );
}

export default Logo;
