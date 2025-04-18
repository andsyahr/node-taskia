document.addEventListener('DOMContentLoaded', () => {
  const useForm = document.getElementById('userForm')
  const userManager = new User()

  useForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const usernameByInput = document.getElementById('username').value

    const result = userManager.signInUser(usernameByInput)

    if (result.success) {
      localStorage.setItem('usernameLoggedIn', usernameByInput)
      return (window.location.href = '../tasks')
    } else {
      alert(result.message)
    }
  })
})
