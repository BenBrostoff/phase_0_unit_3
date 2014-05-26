// U3.W8-9: Gradebook from Names and Scores

// I worked on this challenge by myself but received a useful piece of advice / code from Hing Huynh.

// Pseudocode

// To tally votes:
    // Iterate through each voter 
        // Iterate through each position
        // Create separate objects representing possible elect for each position with votes
// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}


// Tally the votes in voteCount.
var voteCount = {
   tally: function(position){
   array = [];
   count = [];
   new_array = [];
   counter = 1; 
   // represents votes: start at one since individual votes are worth 1
   new_array_counter = 0;
   // represents new_array slots
   for (var key in votes) {
   var obj = votes[key];
   for (var prop in obj) {
      // important check that this is objects own property 
      // not from prototype prop inherited
      if(obj.hasOwnProperty(prop) && prop == position) {
          array.push(obj[prop]);
      }
   }
 }   

array.push("X");
// Solves the last element issue
array.sort();
 for (i = 0; i < array.length-1; i++) {
 if (array[i] == array[i+1]) {
    counter++;
 }   
 if (array[i] !== array[i+1]){
    count.push(counter);
    counter = 1;
    new_array.push([array[i], count[new_array_counter]]);
    new_array_counter++;
}
}
new_array.sort(function(a, b) { 
    return a[1] < b[1]?1:-1;
});
return new_array;
},

  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

president_array = voteCount.tally("president");
for (student in president_array){
    voteCount["president"][president_array[student][0]] = president_array[student][1];
}

vice_president_array = voteCount.tally("vicePresident");
for (student in vice_president_array){
    voteCount["vicePresident"][vice_president_array[student][0]] = vice_president_array[student][1];
}

secretary_array = voteCount.tally("secretary");
for (student in secretary_array){
    voteCount["secretary"][secretary_array[student][0]] = secretary_array[student][1];
}

treasurer_array = voteCount.tally("treasurer");
for (student in treasurer_array){
    voteCount["treasurer"][treasurer_array[student][0]] = treasurer_array[student][1];
}


/* The name of each student receiving a vote for an office should become a property 
of the respective office in voteCount.  After Alex's votes have been tallied, 
voteCount would be ...

  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }

*/


/* Once the votes have been tallied, assign each officer position the name of the 
student who received the most votes. */
var officers = {
  president: voteCount.tally("president")[0][0],
  vicePresident: voteCount.tally("vicePresident")[0][0],
  secretary: voteCount.tally("secretary")[0][0],
  treasurer: voteCount.tally("treasurer")[0][0]
}




// __________________________________________
// Refactored Solution


// I did not realize when originally doing this challenge that we were not supposed
// to modify the objects inside of the objects themselves.
// After taking a look at Hing Huynh's code, I realize a more elegant solution
// was to modify the objects outside of the object brackets. 
// Below, I've pasted Hing's code (in caps) and went line by line to explain his process.


// for (var voter in votes) {  // FOR EACH VOTER OBJECT (E.G. ALEX) IN VOTES
//     for (var office in votes[voter]) { () // FOR EACH OFFICE (E.G. PRESIDENT) IN EACH VOTER (E.G. ALEX)
//             if (voteCount[office][votes[voter][office]] == undefined) { // NOW THAT OFFICE IS DEFINED, SEE IF 
                // EX. PRESIDENT[ALEX[PRESIDENT]] => PRESIDENT[BOB] => BOB DOESN'T HAVE ANY PROPERTIES
//                 voteCount[office][votes[voter][office]] = 1; // IF SO, LET THE TALLY EQUAL 1
//             }
//             else {                                            
//                 voteCount[office][votes[voter][office]] += 1; // IF NOT UNDEFINED, ADD 1 TO THE TALLY
                // USING ABOVE, WE'VE MADE PRESIDENT[BOB] = 1
//             }        
//      }
// }

// for (var position in voteCount ) { // FOR LOOP WITH SORTING COMPARISON WHEREIN HIGHEST VOTE IS CONTINUALLY CHECKED
//     var highestVote = 0; // SET HIGHEST VOTE TO 0
//     for (var candidate in voteCount[position]){ // GO THROUGH EACH POTENTIAL ELECT FOR EACH POSITION
//         if (voteCount[position][candidate] > highestVote) { //IF THE VOTES FOR THAT CANDIDATE IS MORE THAN HIGHEST VOTE
//             highestVote = voteCount[position][candidate]; // MAKE HIGHEST VOTE EQUAL TO THAT CANDIDATE'S TOTAL VOTES
//             officers[position] = candidate; // MAKE THAT CANDIDATE THE POSITION 
//         }   
//      }
// }



// __________________________________________
// Reflection

//Hing and I took opposite routes to passing the tests here.
//I think Hing's solution was truer to the "lesson" this exercise sought to teach - how to use nested loops in JavaScript for object properties.
//Specifically, Hing's code was excellent at using the (var x in object[object]) set up.
//When writing code like this, it's essential to have either visuals or a good mental working diagram of what's going on.
//I found that commenting out Hing's code made it significantly easier to understand.
//My own code perhaps took a Ruby approach to a JavaScript problem.
//I saw a problem that looked like it needed a frequency table, so I immediately built an array of arrays (I would have used a hash if in Ruby). 
//Really, I think in retrospect the right approach is to loop through object properties - thanks again Hing for your great solution here. 



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
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)