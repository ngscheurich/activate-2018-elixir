import React, { Component } from "react";
import { Deck, MarkdownSlides } from "spectacle";
import createTheme from "spectacle-theme-nova";

import {
  Title,
  IntroToErlang1,
  IntroToErlang2,
  IntroToErlang3,
  IntroToErlang4,
  IntroToErlang5,
  IntroToElixir1,
  IntroToElixir2,
  IntroToElixir3
} from "./slides";

const theme = createTheme("nova", {
  components: {
    listItem: {
      lineHeight: 1.45
    }
  }
});

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        theme={theme}
        progress="bar"
        transition={["slide"]}
        transitionDuration={300}
      >
        {Title()}
        {IntroToErlang1()}
        {IntroToErlang2()}
        {IntroToErlang3()}
        {IntroToErlang4()}
        {IntroToErlang5()}
        {IntroToElixir1()}
        {IntroToElixir2()}
        {IntroToElixir3()}
      </Deck>
    );
  }
}
