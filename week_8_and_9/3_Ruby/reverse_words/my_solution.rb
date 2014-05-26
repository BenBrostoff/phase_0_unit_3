# U3.W8-9: Reverse Words


# I worked on this challenge by myself.

# 2. Pseudocode

# Reverse words needs to do the following:
	# Reverse characters in string
	# Do not reverse order of words
	# Define words by spaces
# Create an array of words with spaces as element separator
# Iterate through each element and reverse

# 3. Initial Solution

def reverse_words(arg)

	word_array = arg.split(" ")
	word_array = word_array.map{|i| i.reverse}
	word_array.join(" ")

end



# 4. Refactored Solution

# As we only have three lines of code to begin with here, I don't necessarily see refactoring as necessary here. 


# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

def random_word(length = 5)
  rand(36**length).to_s(36)
end

def assert
  raise "Assertion failed!" unless yield
end


word = random_word
word1 = random_word
word2 = random_word

assert {reverse_words("") == ""}
assert {reverse_words(word) == word.reverse}
assert {reverse_words("#{word1} #{word2}") == "#{word1.reverse} #{word2.reverse}"}
assert {reverse_words("Ich bin ein Berliner") == "hcI nib nie renilreB"}


# 5. Reflection 

# Basically using the reverse method with one catch - word order is not reverse.
# Only requirement here was to convert words into an array, reverse each element and then spit back array in original order.
# A more difficult challenge here would have to complete the challenge without using the reverse method.
# In this case, you'd need to break all the elements into individual characters and reverse the elements manually (without using reverse).
