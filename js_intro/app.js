//
// Lab 1
// FizzBuzz
//
// for 1 to 30
// if the number is multiple of 3, print "Fizz"
// if the number is multiple of 5, print "Buzz"
// if the number is multiple of 3 and 5, print "FizzBuzz"
// else print the number

$('#fizzbuzz-results').append('FizzBuzz!');

// Lab 2

function looper() {
  for (var i = 0; i <= 10; i++) {
    var loop = 'in the loop';
  }

  // Uncomment the alert
  // Is this variable in scope?
  // alert(loop);
}

looper();

// Lab 3

var message = 'Hello';

$("#button").click(function() {

  // Uncomment the alert
  // And click the button, it's OK
  // What do you expect to see?
  // alert(this.message);
})

// Lab 4

function outer() {
  var outerVar = 1;
  return function() {
    return outerVar;
  }
}

// Uncomment the alert
// What's going on here?
// alert(outer()());
