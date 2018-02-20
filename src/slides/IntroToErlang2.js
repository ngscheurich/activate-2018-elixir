import React from "react";
import styled from "react-emotion";
import { Slide, List, ListItem } from "spectacle";

export default () => {
  return (
    <Slide>
      <List>
        <ListItem>Built in 1986 to run telephony switches</ListItem>
        <ListItem>
          Designed to solve problems facing telephony
          <List>
            <ListItem>
              <strong>Fault tolerance:</strong> A switch can drop a call but the
              entire network can't go down
            </ListItem>
            <ListItem>
              <strong>Concurrency:</strong> Switches need to be able to handle
              thousands or hundreds of thousands of simulatenous connections
            </ListItem>
            <ListItem>
              <strong>Performace:</strong> Switches need to be fast and
              efficient
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Slide>
  );
};
