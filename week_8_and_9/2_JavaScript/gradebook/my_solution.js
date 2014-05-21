/*
U3.W8-9: Gradebook from Names and Scores

You will work with the following two variables.  The first, students, holds the names of four students.  
The second, scores, holds groups of test scores.  The relative positions of elements within the two 
variables match (i.e., 'Joseph' is the first element in students; his scores are the first value in scores.).

Do not alter the students and scores code.

I worked on this challenge by myself.

*/

var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]


// __________________________________________
// Write your code below.

var average = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
   }  
  var average = sum / array.length;
  return average;
}


var gradebook = {
    Joseph: {name: "Joseph", testScores: scores[0]},
    Susan: {name: "Susan", testScores: scores[1]},
    William: {name: "William", testScores: scores[2]},
    Elizabeth: {name: "Elizabeth", testScores: scores[3]},
  
  addScore: function(name_entry, score) {
      gradebook[name_entry].testScores.push(score);
    },

  getAverage: function(name_entry) {
    var sum = 0;
      for (var i = 0; i < gradebook[name_entry].testScores.length; i++) {
          sum += gradebook[name_entry].testScores[i];
      }  
    var average = sum / gradebook[name_entry].testScores.length
    return average;
    }

}




// __________________________________________
// Refactored Solution

// Only an average function and push function, as well as defining an object, are done above.
// Some variable renaming might benefit the code (e.g. name instead of name_entry) but I don't see much room for value add refactoring.

// __________________________________________
// Reflect

// JavaScript notation / syntax is far more difficult than Ruby.
// What mainly added to the time it took to solve this challenge was missing colons, semi-colons and commas for separating object properties.
// Sublime really isn't the best environment for working in JS - an IDE even like the one in CodeAcademy labs will provide syntax corrections.
// Also, JS unlike Ruby will not evaluate the last expression in a function - return statements really are necessary.
// Like Java (as I recall from my college days), it's important in JS to keep track of your parens and }s.
// Just based on syntax alone, I prefer Ruby to JS.


// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (average instanceof Function),
  "The value of average should be a Function.\n",
  "1. "
)

assert(
  average([1, 2, 3]) === 2,
  "average should return the average of the elements in the array argument.\n",
  "2. "
)

assert(
  (gradebook instanceof Object),
  "The value of gradebook should be an Object.\n",
  "3. "
)

assert(
  (gradebook["Elizabeth"] instanceof Object),
  "gradebook's Elizabeth property should be an object.",
  "4. "
)

assert(
  (gradebook.William.testScores === scores[2]),
  "William's testScores should equal the third element in scores.",
  "5. "
)

assert(
  (gradebook.addScore instanceof Function),
  "The value of gradebook's addScore property should be a Function.",
  "6. "
)

gradebook.addScore("Susan", 80)

assert(
  (gradebook.Susan.testScores.length === 5
   && gradebook.Susan.testScores[4] === 80),
  "Susan's testScores should have a new score of 80 added to the end.",
  "7. "
)

assert(
  (gradebook.getAverage instanceof Function),
  "The value of gradebook's getAverage property should be a Function.",
  "8. "
)

assert(
  (gradebook.getAverage("Joseph") === 80),
  "gradebook's getAverage should return 80 if passed 'Jospeh'.",
  "9. "
)