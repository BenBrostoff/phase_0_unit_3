require_relative 'MODEL'
require_relative 'VIEW'

class Controller

  attr_accessor :view

  def initialize
    @view = GroceryView.new
  end

  def start
    self.view.start_display
  end

end

controller = Controller.new
controller.start