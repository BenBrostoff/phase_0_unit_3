class GroceryItem

  attr_accessor :item, :quantity, :unit

  def initialize(item, quantity, unit)
    @item = item
    @quantity = quantity
    @unit = unit
  end

  def update(quantity, unit)
    @quantity = quantity
    @unit = unit
  end
  
end

class GroceryList

  attr_accessor :list

  def initialize
    @list = []
  end

  def add_item(grocery)
    @list << grocery
  end

  def remove_item(list_number)
    item_index = list_number - 1
    @list.delete_at(item_index)
  end

  def show_length 
    @list.length
  end

  def display_list
    @list.each_with_index{ |grocery, i| puts "#{i+1}. #{grocery.quantity} #{grocery.unit} : #{grocery.item}" }
  end

end
