require_relative 'MODEL'
require_relative 'VIEW'

class Controller

  attr_accessor :view, :list

  def initialize
    @view = GroceryView.new
    @list = GroceryList.new 
    home
  end

  def home
    route_choose(view.option_display)
  end

  def reprompt
    view.error_display
    home
  end

  def route_choose(option)
    add_item if option == 1
    display_list if option == 2
    remove_item if option == 3
    change_item if option == 4
    done if option == 5
    reprompt if option == 0 || option > 5 || option == ""
  end

  def add_item
    item = view.item_prompt
    quantity = view.quantity_prompt
    unit = view.unit_prompt

    list.add_item(GroceryItem.new(item, quantity, unit))
    view.add_item_confirm(item, quantity, unit)

    view.back_to_home
    home
  end

  def display_list
    list.display_list

    view.back_to_home
    home
  end

  def remove_item
    list.display_list
    option = view.remove_item_display
    if option != 0 && option <= list.list.length
      remove_item(option)
      remove_item_confirm(list[option - 1].item)
      home
    else
      view.error_display
      remove_item
    end
  end

  def change_item
    list.display_list
    item = list.list[view.change_item_display - 1]
    old_quantity = item.quantity
    old_unit = item.unit

    new_quantity = view.quantity_change_prompt(item.item)
    new_unit = view.unit_change_prompt(item.item)

    item.update(new_quantity, new_unit)

    view.quantity_change_confirm(item.item, old_quantity, new_quantity)
    view.unit_change_confirm(item.item, old_unit, new_unit)

    home
  end

  def done
    view.exit 
  end

end

controller = Controller.new

