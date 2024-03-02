const User = {

    _email: 'aa@bb.com', 
    _password: 'pass',

  get password() {
    return this._password.toUpperCase()
  },

  set password(password) {
    this._password = password
  }
}

// Using Factory function
const user = Object.create(User)

console.log(user)  
console.log(user.password) 
