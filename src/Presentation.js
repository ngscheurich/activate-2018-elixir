import React from "react"
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
  Image,
  Layout,
  Fit,
  Fill,
} from "spectacle"
import CodePane from "./components/CodePane"

import { theme, colors, fonts, styles } from "./themes/activate"
import * as images from "./assets/images"
import * as examples from "./assets/examples"

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        transitionDuration={300}
        progress="bar"
        theme={theme}
      >
        {/* -- Title Slide -- */}
        <Slide bgColor={styles.titleSlide.backgroundColor}>
          <div style={styles.titleSlide.container}>
            <Image src={images.titleSlide} style={styles.titleSlide.image} />
          </div>
        </Slide>

        {/* -- Intro to Erlang -- */}
        <Slide>
          <Heading size={2}>Intro to Erlang/BEAM</Heading>
          <Image src={images.erlangLogo} style={{ width: 300 }} />
        </Slide>

        <Slide>
          <List>
            <ListItem>
              Built in 1986 as an experiment for telephony switch networks
            </ListItem>
            <ListItem>
              Designed to solve problems facing telephony
              <List>
                <ListItem>
                  <strong>Fault tolerance:</strong> A switch can drop a call but
                  the entire network can’t go down
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
            The result of this experiment was the language, Erlang, and its
            virtual machine, BEAM. Since then Erlang applications have been
            deployed in production environments to extraordinary uptime.
          </Text>
        </Slide>

        <Slide>
          <Text>
            One switch application had a million lines of code and managed
            9-nines of uptime—it never went down in 30 years!
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
              simultaneous users can be handled on minimal hardware*
            </ListItem>
            <ListItem>
              <strong>Performace:</strong> Faster experiences are better for
              users
            </ListItem>
          </List>
          <Text style={{ color: colors.orange, fontSize: "1.5rem" }}>
            * WhatsApp managed 2 million connections on a single node!
          </Text>
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

        {/*
        <Slide>
          <Image src={images.joe} />
        </Slide>
        */}

        {/* -- Intro to Function Programming-- */}
        <Slide>
          <Heading size={2}>Functional Programming</Heading>
          <Image src={images.exampleFunction} style={{ width: 300 }} />
        </Slide>

        <Slide>
          <Heading size={3}>
            Erlang is a functional programming language
          </Heading>
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
          <Heading size={4}>
            Some core concepts in functional programming
          </Heading>
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
          <Heading size={4}>Object-Oriented</Heading>
          <CodePane lang="ruby" source={examples.basicOOP} />
          <Heading size={4} style={{ marginTop: "4rem" }}>
            Functional
          </Heading>
          <CodePane lang="elixir" source={examples.basicFP} />
        </Slide>

        {/* -- Intro to Elixir -- */}
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
          <Heading size={3}>The Elixir compiler</Heading>
        </Slide>

        <Slide>
          <Heading size={4}>Elixir has a powerful compiler</Heading>
          <List>
            <ListItem>Compile-time referential checks</ListItem>
            <ListItem>Opt-in compile-time type safety</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Without compile-time checks</Heading>
          <CodePane lang="ruby" source={examples.runtime} />
        </Slide>

        <Slide>
          <Heading size={4}>With compile-time checks</Heading>
          <CodePane lang="elixir" source={examples.compileTime} />
        </Slide>

        <Slide>
          <Heading size={3}>The Pipeline Operator</Heading>
        </Slide>

        <Slide>
          <Text style={styles.marginBottom}>
            One of the common downsides to functional programming is{" "}
            <em>parenthesis hell</em>. Take the following for example:
          </Text>
          <div style={styles.marginBottom}>
            <CodePane lang="elixir" source={examples.parenthesisHell} />
          </div>
          <Text>
            This is really hard to read and reason about. It’s inside-out, which
            makes it difficult to understand what is happening. It’s also
            difficult add a new function call in the middle.
          </Text>
        </Slide>

        <Slide>
          <Text style={styles.marginBottom}>
            We could try fixing this using variable assignment:
          </Text>
          <div style={styles.marginBottom}>
            <CodePane lang="elixir" source={examples.parenthesisHellRedux} />
          </div>
          <Text>
            But this is incredibly wasteful—since those values are never used
            again, they’re useless assignments. It’s also hard to reason about
            because the interaction between different functions isn’t clear.
          </Text>
        </Slide>

        <Slide>
          <Text style={styles.marginBottom}>
            Enter the <strong>pipeline operator</strong>:
          </Text>
          <div style={styles.marginBottom}>
            <CodePane lang="elixir" source={examples.pipelineHeaven} />
          </div>
          <Text style={styles.marginBottom}>
            <em>Ah…</em> Breathe a sigh of relief. The pipeline operator is an
            awesome language feature that makes multiple function calls easier
            to read and reason about*.
          </Text>
          <Text style={{ color: colors.orange, fontSize: "1.5rem" }}>
            * And is coming to other languages soon!
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Pattern Matching</Heading>
        </Slide>

        <Slide>
          <Text style={styles.marginBottom}>
            Pattern matching is one of the most powerful concepts in Elixir. It
            allows us to build very complex systems with simple, readable
            constructs. For example, consider a string with a simple format. We
            want to extract the integer portion for lookup:
          </Text>
          <CodePane lang="elixir" source={examples.patternMatchingSimple} />
        </Slide>

        <Slide>
          <Text style={styles.marginBottom}>
            When the pattern match fails, Elixir gives us an error:
          </Text>
          <CodePane lang="elixir" source={examples.patternMatchingError} />
        </Slide>

        <Slide>
          <Text style={styles.marginBottom}>
            It also allows for destructing complex data structures. For example,
            consider a params structure from an HTTP request:
          </Text>
          <CodePane
            lang="elixir"
            source={examples.patternMatchingDestructuring}
          />
        </Slide>

        <Slide>
          <Text style={styles.marginBottom}>
            Pattern matching also lets us define multiple signatures for the
            same function that get called under different conditions:
          </Text>
          <CodePane lang="elixir" source={examples.patternMatchingFuncDefs} />
        </Slide>

        <Slide>
          <Heading size={3}>The Match Operator</Heading>
        </Slide>

        <Slide>
          <Text>
            You’ll notice that `=`, the assignment operator in many languages,
            is used to define our pattern matches. `=` in Elixir is known as the{" "}
            <em>match operator</em>.{" "}
            <strong>
              In a successful match, values will be bound to their corresponding
              variables in the pattern.
            </strong>
          </Text>
        </Slide>

        <Slide>
          <Text>
            When we specify a variable name on the <em>left</em> side of a
            pattern match, `=` will bind the expression on the right side of the
            expression to a new variable of that name.
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Docs are first-class citizens</Heading>
        </Slide>

        <Slide>
          <Text>
            Elixir gives us docstrings that can be formatted with Markdown to
            produce nicely formatted documentation that can be turned into HTML
            and viewed in the REPL or your editor.
          </Text>
        </Slide>

        <Slide>
          <Image src={images.iexDocs} />
        </Slide>

        <Slide>
          <Heading size={4}>
            Elixir even allows for defining example code that can be run in
            tests to validate documentation!
          </Heading>
          <CodePane lang="elixir" source={examples.docsExample} />
        </Slide>

        <Slide>
          <Heading size={3}>Processes & Concurrency</Heading>
        </Slide>

        <Slide>
          <List>
            <ListItem>
              Processes in Elixir are <em>not</em> CPU processes
            </ListItem>
            <ListItem>
              Processes are the base unit of concurrency in Elixir
            </ListItem>
            <ListItem>
              They are incredibly lightweight constructs of the Erlang VM
            </ListItem>
            <ListItem>
              Processes send messages to and receive messages from other
              processes
            </ListItem>
            <ListItem>Processes can manage other processes</ListItem>
          </List>
        </Slide>

        <Slide>
          <Text style={{ textAlign: "center" }}>[concurrency graphic]</Text>
        </Slide>

        <Slide>
          <Heading size={3}>Fault Tolerance</Heading>
        </Slide>

        <Slide>
          <BlockQuote>
            <Quote>Let it crash!</Quote>
            <Cite>Erlang programmers</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={4}>Failure can be okay!</Heading>
          <Text>
            When an Elixir process fails, it can report this failure to a
            supervisor who can handle the failure in an explicit way, oftentimes
            simply restarting the failed process.
          </Text>
        </Slide>

        <Slide>
          <Heading size={4}>Failure can be okay!</Heading>
          <Text>
            This is a refreshing alternative to “defensive programming” or, the
            habit of rescuing errors, and leads to predictable, stable
            applications.
          </Text>
        </Slide>

        <Slide>
          <Heading size={4}>Hot code swapping</Heading>
          <Text>
            An additional benefit of this highly supervised environment is the
            ability to deploy new code without any interruption of service.
          </Text>
        </Slide>

        <Slide>
          <Text style={{ textAlign: "center" }}>
            [supervision tree graphic]
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Example Code</Heading>
        </Slide>

        <Slide>
          <Heading
            size={3}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            Questions?
          </Heading>
          <Layout style={styles.marginBottom}>
            <Fill>
              <Image
                src={images.logan}
                style={{ width: 150, marginBottom: "2rem" }}
              />
              <Text style={{ textAlign: "center", color: colors.yellow }}>
                @lleger
              </Text>
              <Text style={{ textAlign: "center", fontSize: "1.5rem" }}>
                Talky-talks
              </Text>
            </Fill>

            <Fill>
              <Image
                src={images.nick}
                style={{ width: 150, marginBottom: "2rem" }}
              />
              <Text style={{ textAlign: "center", color: colors.yellow }}>
                @ngscheurich
              </Text>
              <Text style={{ textAlign: "center", fontSize: "1.5rem" }}>
                Slidey-slides
              </Text>
            </Fill>
          </Layout>
          <Text style={{ color: colors.teal, textAlign: "center" }}>
            https://github.com/ngscheurich/activate-2018-elixir
          </Text>
          <Text style={{ textAlign: "center" }}>We 💜 Elixir</Text>
        </Slide>
      </Deck>
    )
  }
}
