let name = {
  firstName: "Anna",
  lastName: "D",
  printFullName: function() {
    console.log(this.firstName + " " + this.lastName)
  },
  printFullName2: function(message, timestamp) {
    console.log(this.firstName + " " + this.lastName + ":" + message + "\t\t" + timestamp)
  }
}

name.printFullName()    // prints Anna D


let name2 = {
  firstName: "Anushka",
  lastName: "D"
}

// we cannot call printFullName function using name2
// name2.printFullName()

// Function Borrwoing:
// name2 can borrow the function printFullName from name object

name.printFullName.call(name2)

// parameters can be passed to function
name.printFullName2.call(name2, "Hi", "03:01:24")


// Apply:
// The only difference between call and apply is the way parameters are passed

name.printFullName2.apply(name2, ["Hi", "03:01:24"])


// Bind:
// Looks like call, but instead of calling the function directly, it binds the method to an object
let print = name.printFullName2.bind(name2, "Hi", "03:01:24")
console.log(print) // [Function: bound printFullName2]
print()

// can be used to invoke the method later