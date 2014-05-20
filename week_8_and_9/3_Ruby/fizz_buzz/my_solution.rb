# U3.W8-9: 


# I worked on this challenge by myself.

# 2. Pseudocode

# Take array as argument
# Iterate through each element in array
	# IF only divisible by 3, change element to Fizz
	# IF only divisible by 5, change element to Buzz
	# IF divisible by 3 and 5, change element to Fizzbuzz
	# ELSE, keep element same


# 3. Initial Solution

# def super_fizzbuzz(array)
# 	i = 0
# 	array.each do |num|
# 			array[i] = "Fizz" if  num % 3 == 0 && num % 5 != 0
# 		    array[i]  = "Buzz" if num % 5 == 0 && num % 3 != 0
# 			array[i]  = "FizzBuzz" if num % 3 == 0 && num % 5 == 0
# 			array[i]  = num if num % 3 != 0 && num % 5 != 0
# 			i += 1
# 	 end
# end

# 4. Refactored Solution

# Eliminated final condition above, as it's redundant - eliminating line entirely does not alter program.

# 3. Initial Solution

def super_fizzbuzz(array)
	i = 0
	array.each do |num|
			array[i] = "Fizz" if  num % 3 == 0 && num % 5 != 0
		    array[i]  = "Buzz" if num % 5 == 0 && num % 3 != 0
			array[i]  = "FizzBuzz" if num % 3 == 0 && num % 5 == 0
			i += 1
	 end
end


# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

def random_input_array(base, size)
  (1..size).map { |i| base**(1+rand(15)) }
end
 
def assert
  raise "Assertion failed!" unless yield
end

random_input_array(3,100)

assert { super_fizzbuzz(random_input_array(3,100)) == ["Fizz"]*100}
assert { super_fizzbuzz(random_input_array(5,100)) == ["Buzz"]*100}
assert { super_fizzbuzz(random_input_array(15, 100)) == ["FizzBuzz"]*100}
assert { super_fizzbuzz([1,2,3]) == [1,2,'Fizz']}
assert { super_fizzbuzz([15, 5, 3, 1]) == ['FizzBuzz', 'Buzz', 'Fizz', 1]}


# 5. Reflection 

# Like the fibonacci challenge, I was able to solve this one in < 15 minutes.
# I think random_input_array is a somewhat interesting method.
# Effectively, the method takes a size argument and a base arument and raises the base argument to a random power for each element in the array.
# For random_input_array(3,100), you end up with [3^(random), 3^(random)... to 100 elements].
# My assumption is tha FizzBuzz questions asked in interviews are harder versions than this one.
# For this challenge, it was really just a test of iterating through arrays and using conditionals.




