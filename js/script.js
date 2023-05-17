"use strict";

/**
 * This function calculates the factorial of the number the user enters
 */
function CalculateFactorial() {
  
  // Initialize the product as 1
  let product = 1

  // Get the user number
  let userNumber = parseInt(document.getElementById("user-number").value)

   // If the user enters a negative number
  if (userNumber < 0) {
    document.getElementById("result").innerHTML = "Please do not enter a negative number!"

    // Exits the function early if user enters a negative number
    return
  }

  if (userNumber == 0) {
    product = 1
  } else {
    let counter = userNumber
    do {
      // Multiply the current value of product with counter
      product = product * counter
      counter--
    } while (counter >= 1)
  }

  // Display the factorial of the user's number
  document.getElementById("result").innerHTML =
    "The factorial of " + userNumber + " is " + product + "."
}
