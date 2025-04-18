class User {
  constructor() {
    this.users = this.getUsers() || []
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData
    }

    this.users.push(newUser)
    localStorage.setItem('users', JSON.stringify(this.users))

    return {
      success: true
    }
  }

  signInUser(usernameByInput) {
    const userExists = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    )

    if (userExists) {
      return {
        success: true,
        usernameByInput
      }
    } else {
      return {
        success: false,
        message: 'User belum terdaftar'
      }
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || []
  }
}
