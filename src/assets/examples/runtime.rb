class Example 
  def add(x, y)
    x + y
  end

  def value
    "1.0"
  end
end

# 🚀 Deploy... OK

example = Example.new
add(example.value, 1) # => TypeError: no implicit conversion of Integer into String
minus(example.value, 1) # => NoMethodError: undefined method `minus' for main:Object
