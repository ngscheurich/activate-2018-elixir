import React from "react";
import styled from "react-emotion";
import { Slide, Heading, List, ListItem } from "spectacle";

export default () => {
  return (
    <Slide>
      <Heading size={4}>
        Turns out, the same things that are good for telephony are good for
        modern day web apps.
      </Heading>
      <List>
        <ListItem>
          <strong>Fault tolerance:</strong> Dropping a connection is ok, but
          taking the entire app down is bad
        </ListItem>
        <ListItem>
          <strong>Concurrency:</strong> Realtime updates and millions of
          simulteanous users can be handled on minimal hardware (WhatsApp
          managed 2 million connections on a single node).
        </ListItem>
        <ListItem>
          <strong>Performace:</strong> Faster experiences are better for users
        </ListItem>
      </List>
    </Slide>
  );
};
