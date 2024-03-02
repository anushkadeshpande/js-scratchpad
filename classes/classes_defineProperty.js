function User (email, password){

    this._email = email
    this._password = password
  
  Object.defineProperty(this, 'email', {
    get: function() {
      return this._email
    },
    set: function(value) {
      this._email = value
    }
  })

  Object.defineProperty(this, 'password', {
    get: function() {
      return this._password
    },
    set: function(value) {
      this.password = value
    }
  })

}


const user = new User("anna@bb.com", "adf")

// prints User { email: 'anna@bb.com', password: '123' }
// but in browser, we can see that it extends Object (has a prototype of Object)
console.log(user)  
console.log(user.password) 
