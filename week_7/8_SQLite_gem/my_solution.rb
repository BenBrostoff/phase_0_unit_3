# U3.W7: BONUS Using the SQLite Gem

# I worked on this challenge by myself.

require 'sqlite3'


$db = SQLite3::Database.open "congress_poll_results.db" #uses SQLite3 to open database


def print_arizona_reps
  puts "AZ REPRESENTATIVES"
  az_reps = $db.execute("SELECT name FROM congress_members WHERE location = 'AZ'") #now have array of all congress members from Arizona 
  az_reps.each { |rep| puts rep } #print out all arizona reps line by line
end

def print_longest_serving_reps(minimum_years)  #to-do: add years served functionality 
  puts "LONGEST SERVING REPRESENTATIVES"
  longest_serving_reps = $db.execute("SELECT name, years_in_congress FROM congress_members WHERE years_in_congress > #{minimum_years}")
  #Above creates array of arrays ([name, years_in_congress] format)
  longest_serving_reps.each {|rep| puts rep[0] + " - " + rep[1].to_s + " years"} #print out 
end

def print_lowest_grade_level_speakers(grade_level)
  puts "LOWEST GRADE LEVEL SPEAKERS (less than < #{grade_level}th grade)"
  lowest_grade_reps = $db.execute("SELECT name, grade_current FROM congress_members WHERE grade_current < #{grade_level}")
  lowest_grade_reps.each {|rep| puts rep[0] + " - " + rep[1].to_s + " grade"} #print out
end


def print_specific_states(*states)
    puts "REPRESENTATIVES OF THE FOLLOWING STATES"
    i = 0
	while i < states.length
		puts "- " + states[i]
		i += 1
	end
	
	puts "" #spacing for output

	state_string = "("
	i = 0

	while i < states.length - 1
		state_string += "'" + states[i] + "'" + "," #converting argument for sqlite
		i += 1
	end

	state_string +="'" + states[states.length - 1] +"'" + ")" #final state (no comma at end)
	p state_string
	state_reps = $db.execute("SELECT name, location FROM congress_members WHERE location IN #{state_string}")
	state_reps.sort_by!{|rep| rep[1]} #sort by state
	state_reps.each {|rep| puts rep[0] + " - " + rep[1].to_s} 
	
end

def print_separator
  puts 
  puts "------------------------------------------------------------------------------"
  puts 
end



print_arizona_reps

print_separator
print_longest_serving_reps(35)
# TODO - Print out the number of years served as well as the name of the longest running reps - COMPLETE
# output should look like:  Rep. C. W. Bill Young - 41 years - COMPLETE 

print_separator
print_lowest_grade_level_speakers(8)
# TODO - Need to be able to pass the grade level as an argument, look in schema for "grade_current" column - COMPLETE

print_separator
print_specific_states("NJ", "NY", "MN", "FL", "AK")


# TODO - Make a method to print the following states representatives as well:
# (New Jersey, New York, Maine, Florida, and Alaska) - COMPLETE


##### BONUS #######
# TODO (bonus) - Stop SQL injection attacks!  Statmaster learned that interpolation of variables in SQL statements leaves some security vulnerabilities.  Use the google to figure out how to protect from this type of attack.

# TODO (bonus)
# Create a listing of all of the Politicians and the number of votes they recieved
# output should look like:  Sen. John McCain - 7,323 votes (This is an example, yours will not return this value, it should just 
#    have a similar format)
# Create a listing of each Politician and the voter that voted for them
# output should include the senators name, then a long list of voters separated by a comma
#
# * you'll need to do some join statements to complete these last queries!


# REFLECTION- Include your reflection as a comment below.
# How does the sqlite3 gem work?  What is the variable `$db` holding?  

# By requiring the sqlite3 gem, Ruby allows the programmer to use sqlite3 within programs and convert results from sqlite queries into arrays.
# The gem's main use here is to convert a table with rows and columns into an array of arrays.
# Following the conversion, each row represents an element in the array and each column an element in the array of arrays (left to right ascending).
# The global variable $db is a database opened by sqlite - now that the database is open in sqlite, we can conduct queries on it and create separate tables.
# I found the following resource useful here: http://sqlite-ruby.rubyforge.org/sqlite3/classes/SQLite3/Database.html
# ,which provides an explanation of the class SQLite3::Database.


# Try to use your knowledge of ruby and OO to decipher this as well as h
# ow the `#execute` method works.  Take a stab at explaining the line 
# `$db.execute("SELECT name FROM congress_members WHERE years_in_congress 
#   > #{minimum_years}")`.  Try to explain this as clearly as possible for 
# your fellow students.  

# $db is a global variable in Ruby (denoted by the $ sign), meaning it can be accessed anywhere in the program. The method execute is called upon db, and from there
# the argument passed in as if the argument were passed into the terminal.
# The resulting table that would normally be returned in a somewhat choppy table form in the terminal is converted into an array of arrays in Ruby.
# As previously noted, each row represents an element in the array and each column an element in the array of arrays (left to right ascending).


# Note I completed this challenge in Week 7. 