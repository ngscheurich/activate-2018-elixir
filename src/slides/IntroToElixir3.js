import React from "react";
import styled from "react-emotion";
import { Slide, Heading, List, ListItem } from "spectacle";

export default () => {
  return (
    <Slide>
      <Heading size={3}>Why not just write Erlang?</Heading>
      <List>
        <ListItem>
          Better tooling (dependency management, build tool, test runner)
        </ListItem>
        <ListItem>
          Documentation is testable and formattable (via Markdown)
        </ListItem>
        <ListItem>UTF-8 strings (important to web programming)</ListItem>
        <ListItem>Modularization and code organization</ListItem>
      </List>
    </Slide>
  );
};
