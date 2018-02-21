def receive(%{"id" => id}) when is_integer(id) do
  Foo.find(id)
end

def receive(%{"id" => id}) do
  id
  |> String.to_integer()
  |> Foo.find()
end

def receive(_params) do
  raise InvalidParamsError
end
