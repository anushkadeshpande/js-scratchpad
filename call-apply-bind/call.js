function SetUsername(username){
  //complex DB calls
  this.username = username
  console.log("called");
}

function createUser(username, email, password){
  // call is used to hold the reference to this (retain the execution context)
  // the reference to this is lost here
  SetUsername.call(this, username)
 
  this.email = email
  this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);