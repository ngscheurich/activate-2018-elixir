import React from "react";
import styled from "react-emotion";
import { Slide, Image, Heading } from "spectacle";

import elixirLogo from "../images/elixir-logo.png";

export default () => {
  return (
    <Slide>
      <Heading size={2}>Intro to Elixir</Heading>
      <Image src={elixirLogo} style={{ width: "40%" }} />
    </Slide>
  );
};
