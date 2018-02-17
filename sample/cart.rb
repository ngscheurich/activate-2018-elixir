class Cart
  class Item
    attr_accessor :name, :price

    def initialize(name, price)
      @name = name
      @price = price
    end
  end

  TAX_RATES = {
    "LA" => 0.1,
    "US" => 0.05,
  }

  attr_accessor :items

  def initialize(items = [], region = "LA")
    @items = items
    @region = region
  end

  def add_item(item)
    @items << item
  end

  def total
    (subtotal + tax).round(2)
  end

  private

  def subtotal
    @items.map(&:price).sum
  end

  def tax
    subtotal * TAX_RATES[@region]
  end
end

widget_a = Cart::Item.new("Widget A", 1.25)
widget_b = Cart::Item.new("Widget B", 2.00)

cart = Cart.new([widget_a], "LA")
cart.add_item(widget_b)
puts cart.total

# $ ruby sample/cart.rb
# => 3.58
