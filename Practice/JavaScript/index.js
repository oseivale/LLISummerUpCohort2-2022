console.log('Hello World')

// Declaring functions with NO arguments
function myFirstFunction(){
  var message = "Hello World"
  var name = " Valerie"

  // concatenating two string variables
  var finalSentence = message + name

  return finalSentence
}

// Calling the function
console.log(myFirstFunction())

// Declaring functions with arguments
function mySecondFunction(name, total){

  // Writing a message with string interpolation
  return `${name} went to the store and spent $${total}.`
}

console.log(mySecondFunction("Valerie", 5))

// Working with functions and data structures
var shoppingList = [
  {
    name: 'Bread',
    price: 5
  },
  {
    name: 'Bananas',
    price: 2
  },
  {
    name: 'Juice',
    price: 4.5
  },
  {
    name: 'Cereal',
    price: 6.25
  }
]

function calculateTotal(array){
  // Initialize total price
  let totalPrice = 0;

  // Loop over each item and calculate the total
  array.forEach((item) => {
    return totalPrice += item.price
  })

  // Return a final phrase with the total amount
  return `I went to the store and spent $${totalPrice}`

}

// Call the function
console.log(calculateTotal(shoppingList))
