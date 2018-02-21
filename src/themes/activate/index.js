// Import theme
import createTheme from "spectacle/lib/themes/default";

const colors = {
  navy: "#0A3D5E",
  teal: "#00AEB4",
  red: "#DB232A",
  orange: "#F37620",
  yellow: "#EFC818",
  text: "rgba(255, 255, 255, 0.75)",
  controls: "rgba(255, 255, 255, 0.4)"
};

const fonts = {
  text: "Source Sans Pro",
  heading: "Ubuntu",
  code: "Ubunutu Mono"
};

const styles = {
  marginBottom: {
    marginBottom: "2rem"
  },
  titleSlide: {
    backgroundColor: "#0A3D5E",
    container: {
      alignItems: "center",
      flexDirection: "column",
      top: "calc(-50vh + 50%)",
      left: "calc(-50vw + 50%)",
      position: "absolute",
      width: "100vw",
      height: "100vh"
    },
    image: {
      margin: 0,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  }
};

const base = createTheme();
const theme = {
  ...base,

  screen: {
    ...base.screen,
    global: {
      body: {
        background: colors.navy,
        fontSize: "2rem",
        overflow: "hidden"
      }
    },

    controls: {
      ...base.screen.controls,
      prevIcon: {
        fill: colors.controls
      },
      nextIcon: {
        fill: colors.controls
      }
    },

    progess: {
      ...base.screen.progess,
      bar: {
        bar: {
          background: colors.controls
        }
      }
    },

    components: {
      ...base.screen.components,
      text: {
        ...base.screen.components.text,
        color: colors.text,
        fontFamily: fonts.text,
        fontSize: "2rem",
        textAlign: "left",
        lineHeight: 1.35
      },

      heading: {
        h2: {
          color: colors.teal,
          fontSize: "4rem",
          fontFamily: fonts.heading,
          margin: "0 0 4rem"
        },
        h3: {
          color: colors.orange,
          fontSize: "3rem",
          fontFamily: fonts.heading,
          fontWeight: 400,
          margin: "0 0 2rem"
        },
        h4: {
          color: colors.teal,
          fontSize: "2.4rem",
          fontFamily: fonts.heading,
          margin: "0 0 2rem"
        }
      },

      list: {
        textAlign: "left"
      },

      listItem: {
        color: colors.text,
        fontFamily: fonts.text
      },

      quote: {
        ...base.screen.components.quote,
        borderLeft: `3px solid ${colors.yellow}`,
        color: colors.yellow,
        fontFamily: fonts.text,
        fontSize: "4.5rem",
        fontStyle: "italic",
        fontWeight: 500
      },

      cite: {
        ...base.screen.components.cite,
        color: colors.orange,
        fontFamily: fonts.text,
        fontStyle: "normal"
      },

      codePane: {
        ...base.screen.components.codePane,
        fontSize: "1.3rem"
      }
    }
  }
};

export { colors, fonts, styles, theme };
