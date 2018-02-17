# Outline

## Intro to Erlang / BEAM

* Built in 1986 to run telephony switches
* Designed to solve problems facing telephony
  * Fault tolerance - a switch can drop a call but the entire network can't go down
  * Concurrency - switches need to be able to handle thousands or hundreds of thousands of simulatenous connections
  * Performant - switches need to be efficient and fast
* The result was a language that was deployed to extreme uptime -- one switch codebase had a million lines of code and managed nine-9s of uptime (never went down in 30 years)
* Turns out, same things that are good for telephony are good for modern day web apps
  * Fault tolerance - dropping a connection is ok, but taking the entire app down is bad
  * Concurrency - realtime updates and millions of simulteanous users can be handled on minimal hardware (WhatsApp managed 2 million connections on a single node)
  * Performant - faster experiences are better for users

> If Java is 'write once, run anywhere', then Erlang is 'write once, run forever'.

## Intro to Elixir

* Elixir is a language that compiles bytecode to the Erlang VM (BEAM)
* Elixir is written in Elixir
* It has a modern syntax, most broadly influenced by Ruby
* Everything is a function (yes, everything)
* Adds developer-productivity enhancements
  * Has better tooling (dependency management, build tool, test runner)
  * Better documentation formatted by Markdown
  * UTF-8 strings (important to web programming)
  * Modularization and code organization

## Intro to FP

* Referential transparency
* Recursion
* Immutable data
* Dependency injection (easier testing)
* Beautiful, cutting-edge, super cool pure functions
* Everything is more mathematical

```text
f(x) = y
g(f(x)) = z
```

```ruby
foo = Object.new(name: "foo")
foo.name = "foo_new"
```

```elixir
foo = %Object{name: "foo"}
foo = Object.put_change(foo, "foo_new")
```

## Benefit of the Compiler

* Compile-time referential checks
* Opt-in compile-time type safety

```ruby
# value.rb
class Value
  def value
    "1.0"
  end
end

# add.rb
def add(x, y)
  x + y
end

# deploy

add(Value.value, 1) # => TypeError: no implicit conversion of Integer into String
minus(Value.value, 1) # => NoMethodError: undefined method `minus' for main:Object
```

```elixir
# value.ex
defmodule Value do
  # value() :: String.t
  def value do
    "1.0"
  end
end

# add.ex
defmodule Calculator do
  # add(integer, integer) :: integer
  def add(x, y) do
    x + y
  end
end

# $ mix compile
# ** (UndefinedFunctionError) function Calculator.minus/2 is undefined or private
# ** (ArithmeticError) bad argument in arithmetic expression
```

## Why Elixir is a Sexy, Sexy Beast

* One of the downsides of FP is parenthesis hell

Before the pipeline:

```elixir
String.upcase(List.first(String.split("foo,bar", ","))) # => FOO
```

This is really hard to read and reason about. It's inside-out, which makes it difficult to understand what is happening. It's also difficult add a new function call in the middle.

You could fix this variable assignment:

```elixir
string = "foo,bar"
split = String.split(string, ",")
split_first = List.first(split)
upcase = String.upcase(split_first)
```

But that is incredibly wasteful -- since those values are never used again, it's useless assignment. It's also hard to reason about because the interaction isn't clear between different functions.

The promised land:

```elixir
string =
  "foo,bar"
  |> String.split(",")
  |> List.first
  |> String.upcase
```

The pipeline operator is one of the most important innovations in Elixir. It makes multiple function calls easier to read and reason about. (And is coming to other languages soon!)

* There is no assignment in Elixir, `=` is the match operator

Pattern matching is one of the most powerful concepts in Elixir. It allows us to build very complex systems with simple, readable constructs.

For example, consider a string with a simple format. We want to extract the integer portion for lookup:

```elixir
"foo=" <> id = "foo=123"
id # => 123
```

When the pattern match fails, Elixir gives us an error:

```elixir
"foo1=" <> id = "foo=123"
** (MatchError) no match of right hand side value: "foo=123"
```

It also allows for destructing complex data structures. For example, consider a params structure from an HTTP request:

```elixir
%{"id" => id, "foo_params" => params} = %{"id" => 1, "foo_params" => %{"name" => "foo"}}
id # => 1
params # => %{"name" => "foo"}
```

Pattern matching also lets us define multiple signatures for the same function that get called under different conditions:

```elixir
def receive(%{"id" => id}) do
  Foo.find(id)
end

def receive(_params) do
  raise NotFoundError
end
```

You'll notice that the assignment operator in many languages, `=` is used to define our pattern matches. In the earlier examples, when the pattern match is successful (i.e., a pattern was found), it bounded the variable to the value it found in the pattern.

In Elixir, a successful match will set values in any variables used in the pattern.

* Docs are first-class citizens

Elixir gives us docstrings that can be formatted with Markdown to produce nicely formatted documentation. This can be turned into HTML or even viewed in the REPL. Elixir also allows for defining example code that can be run in tests to validate documentation.

Insert graphic: `docs.png` screenshot.

```elixir
defmodule Foo do
  @moduledoc """
  Foo is a really great module.
  """

  @doc """
  Returns the name of Foo.

  ## Examples

    iex> Foo.name
    "Foo"

  """
  def name do
    "Foo"
  end
end
```

## Processes / Concurrency

* Processes in Elixir are not CPU processes
* They are lightweight constructs of the VM
* Processes are the base unit of concurrency in Elixir

Insert graphic: on the left, all of the dependencies needed for concurrency in Ruby; on the right, nothing for concurrency in Elixir.

```ruby
gem 'sidekiq'
# a few hundred lines later (example ommited for brevity)
FooJob.perform("foo")
```

```elixir
defmodule FooJob do
  def perform(string) do
    Task.async(fn -> String.upcase(string) end)
  end
end
```

## Fault Tolerancy

* Failure is good

> You may have heard or read about the unofficial motto that Erlang programmers are so fond of saying: “Let it crash!” That’s the way things are done in the Erlang VM, but this unique way of handling errors can cause programmers who are used to defensive programming to twitch involuntarily. As it turns out, there are several good reasons for this approach, as you’ll soon learn.”

* Supervision trees allow processes to die and be restarted in a defined manner

Insert graphic: supervision tree

* Hot upgrades allow new bytecode to swapped into a running program -- this allows zero-downtime deployments

## Questions

Credits:

Logan Leger / @lleger (talky words)
Nick Scheurich / @ngscheurich (slidey slides)
