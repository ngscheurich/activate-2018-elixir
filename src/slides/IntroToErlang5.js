import React from "react";
import styled from "react-emotion";
import { Slide, Heading, BlockQuote, Quote, Cite } from "spectacle";

export default () => {
  return (
    <Slide>
      <BlockQuote>
        <Quote>
          If Java is write once, run anywhere, then Erlang is write once, run
          forever.
        </Quote>
        <Cite>Joe Armstrong</Cite>
      </BlockQuote>
    </Slide>
  );
};
