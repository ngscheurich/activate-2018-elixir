import React, { Component } from "react";
import { Deck, MarkdownSlides } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import Title from "./slides/Title";
import Demo from "./slides/Demo";

require("normalize.css");

const theme = createTheme(
  {
    primary: "linear-gradient(45deg, #4e2a8e, #714a94)",
    secondary: "white",
    tertiary: "white",
    quarternary: "white"
  },
  {
    primary: "Montserrat",
    secondary: "Alegreya"
  }
);

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
