import React from "react";
import { Slide, Image } from "spectacle";

import titleImage from "../images/title-slide.jpg";

const fullScreenStyle = {
  alignItems: "center",
  flexDirection: "column",
  top: "calc(-50vh + 50%)",
  left: "calc(-50vw + 50%)",
  position: "absolute",
  width: "100vw",
  height: "100vh"
};

const imageStyle = {
  margin: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

export default () => {
  return (
    <Slide bgColor="#0a3d5e">
      <div style={fullScreenStyle}>
        <Image src={titleImage} style={imageStyle} />
      </div>
    </Slide>
  );
};
