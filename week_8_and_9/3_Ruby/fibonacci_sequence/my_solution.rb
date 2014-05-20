# U3.W8-9: 


# I worked on this challenge by myself.

# 2. Pseudocode

# Create a method that takes a number as argument and produces an array with all fib. numbers below that number
# Create another method using the first method that returns true or false as to whether num is in array


# 3. Initial Solution

def gen_fib(num)

  i = 0
  fib_sequence = [1,1]

  while num >= fib_sequence[fib_sequence.length-1]
  	fib_sequence.push(fib_sequence[i] + fib_sequence[i+1])
  	i += 1
  end
 
  fib_sequence

end	

def is_fibonacci?(num)
  fib_sequence = gen_fib(num)
  fib_sequence.include?(num)
end

# 4. Refactored Solution

# I feel the above is fairly compact code as is and does not necessitate refactoring.

# 1. DRIVER TESTS GO BELOW THIS LINE

def random_fibonacci
   [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946].sample #choose a random element or n random elements in array
end

def assert
  raise "Assertion failed!" unless yield
end


assert { is_fibonacci?(random_fibonacci) == true }
assert { is_fibonacci?(8670007398507948658051921) == true}
assert { is_fibonacci?(random_fibonacci+100) == false}
assert { is_fibonacci?(927372692193078999171) == false}

# 5. Reflection 

# I was surprised with how quickly I solved this challenge.
# I initially assumed I would have to use recursion here but ended up just pushing numbers into an array without using methods within a method. 
# I was not aware of the .sample method and want to store it away for future use. 
