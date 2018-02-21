/* eslint-disable import/no-webpack-loader-syntax */

import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Image,
  Layout,
  Fill
} from "spectacle";

import { theme } from "./themes/activate";
import * as images from "./assets/images";
import * as styles from "./styles";
import basicOOP from "raw-loader!./examples/basic-fp.ex";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={300}
        progress="bar"
        theme={theme}
      >
        <Slide bgColor={styles.titleSlide.backgroundColor}>
          <div style={styles.titleSlide.container}>
            <Image src={images.titleSlide} style={styles.titleSlide.image} />
          </div>
        </Slide>

        <Slide>
          <Heading size={2}>Intro to Erlang/BEAM</Heading>
          <Image src={images.erlangLogo} style={{ width: 300 }} />
        </Slide>

        <Slide>
          <List>
            <ListItem>Built in 1986 to run telephony switches</ListItem>
            <ListItem>
              Designed to solve problems facing telephony
              <List>
                <ListItem>
                  <strong>Fault tolerance:</strong> A switch can drop a call but
                  the entire network can't go down
                </ListItem>
                <ListItem>
                  <strong>Concurrency:</strong> Switches need to be able to
                  handle thousands or hundreds of thousands of simulatenous
                  connections
                </ListItem>
                <ListItem>
                  <strong>Performace:</strong> Switches need to be fast and
                  efficient
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Erlang and BEAM</Heading>
          <Text>
            The result was a language, Erlang, and a virtual machine, BEAM, that
            were deployed to extreme uptime. One switch application had a
            million lines of code and managed nine-9s of uptime—it never went
            down in 30 years.
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>
            Turns out, the same things that are good for telephony are good for
            modern day web apps.
          </Heading>
        </Slide>

        <Slide>
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
              <strong>Performace:</strong> Faster experiences are better for
              users
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <BlockQuote>
            <Quote>
              If Java is write once, run anywhere, then Erlang is write once,
              run forever.
            </Quote>
            <Cite>Joe Armstrong</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2}>Intro to Elixir</Heading>
          <Image src={images.elixirLogo} style={{ width: 300 }} />
        </Slide>

        <Slide>
          <List>
            <ListItem>
              Elixir is a language that compiles bytecode to the Erlang VM
              (BEAM)
            </ListItem>
            <ListItem>Elixir is written in Elixir</ListItem>
            <ListItem>
              It has a modern syntax, most broadly influenced by Ruby
            </ListItem>
            <ListItem>
              Everything is a function (yes, <em>everything</em>)
            </ListItem>
            <ListItem>
              It has a modern syntax, most broadly influenced by Ruby
            </ListItem>
          </List>
        </Slide>

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

        <Slide>
          <Heading size={2}>Functional Programming</Heading>
          <Image src={images.exampleFunction} style={{ width: 300 }} />
        </Slide>

        <Slide>
          <Heading size={4}>What is functional programming?</Heading>
          <Text>
            A programming paradigm that treats computation as the evaluation of
            mathematical functions and avoids changing-state and mutable data.
          </Text>
          <Cite>https://en.wikipedia.org/wiki/Functional_programming</Cite>
        </Slide>

        <Slide>
          <List>
            <ListItem>
              Referential transparency
              <List>
                <ListItem>
                  If <code>f(3)</code> produces <code>5</code>, then{" "}
                  <code>f(3)</code> can be replaced with <code>5</code>{" "}
                  everywhere in the program
                </ListItem>
              </List>
            </ListItem>
            <ListItem>Recursion</ListItem>
            <ListItem>Immutable data</ListItem>
            <ListItem>Dependency injection (easier testing)</ListItem>
            <ListItem>Pure functions</ListItem>
          </List>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Heading size={4}>Object-Oriented</Heading>
              <CodePane lang="ruby" source={basicOOP} />
            </Fill>
            <Fill>
              <Heading size={4}>Functional</Heading>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
