import React from "react";
import styled from "react-emotion";
import { Slide, List, ListItem } from "spectacle";

export default () => {
  return (
    <Slide>
      <List>
        <ListItem>
          Elixir is a language that compiles bytecode to the Erlang VM (BEAM)
        </ListItem>
        <ListItem>Elixir is written in Elixir</ListItem>
        <ListItem>
          It has a modern syntax, most broadly influenced by Ruby
        </ListItem>
        <ListItem>Everything is a function (yes, everything)</ListItem>
        <ListItem>
          It has a modern syntax, most broadly influenced by Ruby
        </ListItem>
      </List>
    </Slide>
  );
};
