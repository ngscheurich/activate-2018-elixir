defmodule Cart do
  @moduledoc """
  A shopping cart.

  Allows the addition of items and handles adding tax and creating order totals.

  """

  defmodule Item do
    @moduledoc """
    Represents a physical item in a user's shopping cart.

    ## Fields
    * `name` - a string representing the item's name
    * `price` - a float representing the USD price

    ## Examples

      iex> %Cart.Item{name: "Widget A", price: 1.25}
      %Cart.Item{name: "Widget A", price: 1.25}

    """

    defstruct([:name, :price])
  end

  @doc """
  Adds a `Cart.Item` to a new cart.

  ## Examples

    iex> Cart.add_item(%Cart.Item{name: "Widget A", price: 1.25})
    [%Cart.Item{name: "Widget A", price: 1.25}]

  """
  def add_item(item), do: [item]

  @doc """
  Adds a `Cart.Item` to the `cart`.

  ## Examples

    iex(1)> Cart.add_item(
    ...(1)>   [%Cart.Item{name: "Widget A", price: 1.25}],
    ...(1)>   %Cart.Item{name: "Widget B", price: 2.00}
    ...(1)> )
    [%Cart.Item{name: "Widget A", price: 1.25}, %Cart.Item{name: "Widget B", price: 2.00}]

  """
  def add_item(cart, item) do
    cart ++ [item]
  end

  @doc """
  Totals the cart and adds tax for the given region.

  ## Tax
  * "LA" - 10%
  * Anywhere else - 5%

  ## Examples

    iex> Cart.total([%Cart.Item{name: "Widget A", price: 1.25}], "LA")
    1.38

  """
  def total(cart, region) do
    cart
    |> subtotal()
    |> tax(region)
  end

  defp subtotal(cart) do
    Enum.reduce(cart, 0, fn item, subtotal ->
      subtotal + item.price
    end)
  end

  defp tax(subtotal, "LA") do
    subtotal
    |> Kernel.*(0.1)
    |> Kernel.+(subtotal)
    |> Float.round(2)
  end

  defp tax(subtotal, _region) do
    Float.round(subtotal + subtotal * 0.05, 2)
  end
end

# widget_a = %Cart.Item{name: "Widget A", price: 1.25}
# widget_b = %Cart.Item{name: "Widget B", price: 2.00}

# widget_a
# |> Cart.add_item
# |> Cart.add_item(widget_b)
# |> Cart.total("LA")
# |> IO.inspect
