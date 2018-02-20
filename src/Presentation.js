import React, { Component } from "react";
import { Deck, MarkdownSlides } from "spectacle";
import Title from "./slides/Title";
import Demo from "./slides/Demo";
import createTheme from "spectacle-theme-nova";


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
        {Demo()}
      </Deck>
    );
  }
}
