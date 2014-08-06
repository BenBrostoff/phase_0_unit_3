require_relative 'MODEL'
require_relative 'VIEW'

class Controller

  attr_accessor :view

  def initialize
    @view = GroceryView.new
  end

  def start
    view.start_display
    view.option_display
    return gets.chomp.to_i
  end

  def reprompt
    view.error_display
    start
  end

  def route_choose(option)
    add_item if option == 1
    display_list if option == 2
    remove_item if option == 3
    change_unit if option == 4
    done if option == 5
    reprompt if option == 0 || option > 5
  end

end

controller = Controller.new
controller.route_choose(controller.start)
