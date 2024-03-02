class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  } 

  // defining a getter method for password field
  // ! Note: If a getter is defined, we also need to define a setter
  // TypeError: Cannot set property password of #<User> which has only a getter
  get password() {
    // return this.password.toUpperCase()
    return this._password.toUpperCase()
  }

  // ! If just a setter is written, we get this error
  // RangeError: Maximum call stack size exceeded
  set password(password) {

    // if written like this, will throw an error 
    // this.password = password

    this._password = password
  }
}


const user = new User("anna@bb.com", "adf")

// prints User { email: 'anna@bb.com', password: '123' }
// but in browser, we can see that it extends Object (has a prototype of Object)
console.log(user)  
console.log(user.password) 
