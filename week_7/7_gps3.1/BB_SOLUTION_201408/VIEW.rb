class GroceryView 

  def initialize
  end
  
  def question_prompt
    puts "Please choose a number from the list:"
  end

  def start_display
    puts "Hello, welcome to the grocery list creator"
  end

  def option_display
    option_array = ["Add Item", "Display List", "Remove Item", "Change Unit", "Done"]
    option_array.each_with_index do |option, index|
      puts "#{index + 1}. #{option}"
    end
  end

  def error_display
    puts "That is not a valid response. Please enter a valid response."
  end

  def item_prompt
    puts "What item do you want to add?"
    return gets.chomp
  end

  def quantity_prompt
    puts "How many of the item do you want?"
    return gets.chomp
  end

  def unit_prompt
    puts "What unit of measurement will you be using?"
    return gets.chomp
  end

  def item_display
    puts "Here's your list thus far: "
  end

  def add_item_confirm(item, quantity, unit)
    puts "You added #{quantity} #{item}s, measured in #{unit}, to your list."
  end

  def quantity_change_confirm(item_name, old_q, new_q)
    puts "You changed the quantity of #{item_name} from #{old_q} to#{new_q}"
  end

  def unit_change_confirm(item_name, old_m, new_m)
    puts "You changed the unit of measurement of #{item_name} from #{old_m} to #{new_m}"
  end

  def goodbye_message
    puts "Thanks for using Ben's command line tool!"
  end

  def back_to_home
    puts "Press enter to return home"
    gets.chomp
  end

end

