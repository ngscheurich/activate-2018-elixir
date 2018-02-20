import React from "react";
import styled from "react-emotion";
import { Slide, Heading, Text } from "spectacle";

export default () => {
  return (
    <Slide>
      <Heading size={3}>
        The result was a language that was deployed to extreme uptime.
      </Heading>
      <Text>
        One switch codebase had a million lines of code and managed nine-9s of
        uptime (never went down in 30 years).
      </Text>
    </Slide>
  );
};
