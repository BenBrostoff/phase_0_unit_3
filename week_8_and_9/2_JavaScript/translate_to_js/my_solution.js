// U3.W8-9: Challenge you're converting

// Credit Card Challenge 

// I worked on this challenge by myself.

// 2. Pseudocode

// See pseudocode on Ruby challenge and reflection.

// 3. Initial Solution

function CreditCard (num) {
    this.num = num.toString().split("")
    for (var i = 0; i < this.num.length; i++) {
        this.num[i] = parseInt(this.num[i]);
    }
};

CreditCard.prototype.doubleDigits = function () {
    array = this.num.slice();  // makes non-destructive
    for (var j = 0; j < array.length; j++) {
       if (j % 2 == 0) {
            array[j] = array[j] * 2;
    	}	
        else {
        	array[j] = array[j];
        }
 }
 return array;
 };
 
CreditCard.prototype.sumAllDigits = function () {
     array = this.doubleDigits().slice(); // makes non-destructive
     newArray = [];
     for (var a = 0; a < array.length; a++) {
         if (array[a] > 9) {
            var hold = new CreditCard(array[a]);
            newArray.push(hold.num[0]);
            newArray.push(hold.num[1]);
         }
         else {
            newArray.push(array[a]);
         }
     }
     var sum = 0;
     for (var b = 0; b < newArray.length; b++) {
         sum += newArray[b];
     }
    return sum;
 }

CreditCard.prototype.checkCard = function () {
    if (this.sumAllDigits() % 10 == 0) { //non-destructive
        return true;
    }
    else {
        return false;
    }
}

// 4. Refactored Solution

// This is virtually identical to my Ruby code, which was previously recfactored. 

// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

function joinArray(array) { //JavaScript won't allow for array equality tests - this is a workaround
	var string = "";
	for (i = 0; i < array.length; i++) {
		string += array[i].toString();
	}
	return string;
}

var card1 = new CreditCard(4563960122001999); 
var card2 = new CreditCard(6096736306969264);

assert(
  joinArray(card1.doubleDigits()) == joinArray([8, 5, 12, 3, 18, 6, 0, 1, 4, 2, 0, 0, 2, 9, 18, 9]),
  "The doubleDigits method should double every other digit in the card.\n",
  "1. "
)

assert(
  card1.sumAllDigits() == 70,
  "The sumAllDigits method sums all digits correctly.\n",
  "2. "
 )

assert(
  card1.checkCard() == true,
  "The checkCard method validates correctly.\n",
  "3. " 
)

assert(
  joinArray(card2.doubleDigits()) == joinArray([12, 0, 18, 6, 14, 3, 12, 3, 0, 6, 18, 6, 18, 2, 12, 4] ),
  "The doubleDigits method should double every other digit in the card.\n",
  "4. "
)

assert(
  card2.sumAllDigits() == 71,
  "The sumAllDigits method sums all digits correctly.\n",
  "5. "
 )

assert(
  card2.checkCard() == false,
  "The checkCard method validates correctly.\n",
  "6. " 
)

// 5. Reflection 

// One huge lesson I learned from this exercise - you can't check for array equality in JavaScript.
// Additionally, creating non-destructive methods in JavaScript is difficult for this very reason:

// var array = [1,2,3];
// var big = array;
// big.push(100);
// console.log(array); // => [1,2,3,100]

// .slice() is a workaround here, but only for arrays.

// This exercise shed light on some of the significant differents between JS and Ruby.
// Ruby can check for array equality / in Ruby, .dup is an easy way to make non-destructive methods.

