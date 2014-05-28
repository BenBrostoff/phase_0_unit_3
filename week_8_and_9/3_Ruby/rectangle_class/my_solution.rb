# U3.W8-9: Implement a Rectangle Class


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode



# 3. Initial Solution
class Rectangle
  attr_accessor :width, :height, :area, :perimeter, :diagonal

  def initialize(width, height)
    @width  = width
    @height = height
    @area = width * height
    @perimeter = width * 2 + height * 2
 	@diagonal = Math.sqrt(height ** 2 + width ** 2)
  end

  def ==(other)
    (other.width  == self.width && other.height == self.height ) ||
    (other.height == self.width && other.width  == self.height )
  end

  def square?
  	return true if @height == @width
  	return false if @height != @width
  end

end


# 4. Refactored Solution

# I solved this challenge with only several lines of code and do not see room for significant refactoring.


# 1. DRIVER TESTS GO BELOW THIS LINE

 
def assert
  raise "Assertion failed!" unless yield
end


rectangle = Rectangle.new(10,20)
square = Rectangle.new(20,20)


assert { rectangle.area == 200 }
assert { square.area == 400 }
assert { rectangle.perimeter == 60 }
assert { square.perimeter == 80 }
assert { rectangle.diagonal == 22.360679774997898 }
assert { square.diagonal == 28.284271247461902 }
assert { rectangle.square? == false }
assert { square.square? == true } #alternatively, could test for nil without return statements (see reflection)


# 5. Reflection 

# This challenge shows the value of using the attribute methods as opposed to defining a lage amount of other methods.
# It also refreshed me on the Math module in Ruby, as I needed to use #sqrt. 
# Overall, though, I would not classify this as a very difficult challenge and I solved it rather quickly. 
# Interestingly, I ran into some issues when building out the assert statements.
# One has to literally use the return call in the square? methods, or else square.square? returns nil (assuming you want to test square.square? == true)




