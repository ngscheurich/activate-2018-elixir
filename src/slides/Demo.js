import React from "react";
import styled from "react-emotion";
import { Slide, Heading, Markdown } from "spectacle";
import CodePane from "../components/CodePane";

const code = `current_process = self()

# Spawn an Elixir process (not an operating system one!)
spawn_link(fn ->
  send current_process, {:msg, "hello world"}
end)

# Block until the message is received
receive do
  {:msg, contents} -> IO.puts contents
end
`;

export default () => {
  return (
    <Slide>
      <Heading textSize={40} margin={40}>
        Some Code
      </Heading>
      <CodePane lang="elixir" source={code} />
    </Slide>
  );
};
