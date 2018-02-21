// Import theme
import createTheme from "spectacle/lib/themes/default";

const activate = {
  colors: {
    navy: "#0A3D5E",
    teal: "#00AEB4",
    red: "#DB232A",
    orange: "#F37620",
    yellow: "#EFC818",
    text: "rgba(255, 255, 255, 0.8)",
    controls: "rgba(255, 255, 255, 0.4)"
  },

  fonts: {
    text: "Source Sans Pro",
    heading: "Ubuntu",
    code: "Ubunutu Mono"
  }
};

const base = createTheme();
export const theme = {
  ...base,

  screen: {
    ...base.screen,
    global: {
      body: {
        background: activate.colors.navy,
        fontSize: "2rem"
      }
    },

    controls: {
      ...base.screen.controls,
      prevIcon: {
        fill: activate.colors.controls
      },
      nextIcon: {
        fill: activate.colors.controls
      }
    },

    progess: {
      ...base.screen.progess,
      bar: {
        bar: {
          background: activate.colors.controls
        }
      }
    },

    components: {
      ...base.screen.components,
      text: {
        ...base.screen.components.text,
        color: activate.colors.text,
        fontFamily: activate.fonts.heading,
        fontSize: "2rem"
      },

      heading: {
        h2: {
          color: activate.colors.teal,
          fontSize: "4rem",
          fontFamily: activate.fonts.heading,
          margin: "0 0 4rem"
        },
        h3: {
          color: activate.colors.orange,
          fontSize: "3rem",
          fontFamily: activate.fonts.heading,
          margin: "0 0 2rem"
        },
        h4: {
          color: activate.colors.teal,
          fontSize: "2.4rem",
          fontFamily: activate.fonts.heading,
          margin: "0 0 2rem"
        }
      },

      list: {
        textAlign: "left"
      },

      listItem: {
        color: activate.colors.text,
        fontFamily: activate.fonts.text
      },

      quote: {
        ...base.screen.components.quote,
        borderLeft: `3px solid ${activate.colors.yellow}`,
        color: activate.colors.yellow,
        fontFamily: activate.fonts.text,
        fontSize: "4.5rem",
        fontStyle: "italic",
        fontWeight: 500
      },

      cite: {
        ...base.screen.components.cite,
        color: activate.colors.orange,
        fontFamily: activate.fonts.text,
        fontStyle: "normal"
      }
    }
  }
};
