import React from "react";
import styled from "react-emotion";
import { Slide, Image, Heading } from "spectacle";

import erlangLogo from "../images/erlang-logo.svg";

export default () => {
  return (
    <Slide>
      <Heading size={2}>Intro to Erlang/BEAM</Heading>
      <Image src={erlangLogo} style={{ width: "40%" }} />
    </Slide>
  );
};
