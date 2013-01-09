// Lab 1
// FizzBuzz
//
// for 1 to 30
// if the number is multiple of 3, print "Fizz"
// if the number is multiple of 5, print "Buzz"
// if the number is multiple of 3 and 5, print "FizzBuzz"
// else print the number

for (var i = 1; i <= 30; i++) {
  var output = ''
  if (i % 3 == 0)
    output += 'Fizz'
  if (i % 5 == 0)
    output += 'Buzz'
  if (output === '')
    output += i

  $('#fizzbuzz-results').append(output + "<br/>")
}

// Uncomment the alert
// What's going on here?
// A: the function that's returned is a closure
// alert(outer()());

// Lab 2

function looper() {
  for (var i = 0; i <= 10; i++) {
    var loop = 'in the loop';
  }

  // Uncomment the alert
  // Is this variable in scope?
  // A: the loop variable is hoisted to function scope
  // alert(loop);
}

looper();

// Lab 3

var message = 'Hello';

$("#button").click(function() {

  // Uncomment the alert
  // And click the button, it's OK
  // What do you expect to see?
  // A: undefined, the context is the button, not the global scope
  // alert(this.message);
})

// Lab 4

function outer() {
  var outerVar = 1;
  return function() {
    return outerVar;
  }
}


