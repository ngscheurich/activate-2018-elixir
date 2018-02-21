defmodule Example do
  @spec add(integer, integer) :: integer
  def add(x, y) do
    x + y
  end

  @spec value() :: String.t
  def value do
    "1.0"
  end

  add(1, value())
end

# $ mix compile
# ** (UndefinedFunctionError) function Calculator.minus/2 is undefined or private
# ** (ArithmeticError) bad argument in arithmetic expression

# 🚀 Deploy... NOPE
