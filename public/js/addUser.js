document.addEventListener('DOMContentLoaded', () => {
  const useForm = document.getElementById('userForm')
  const userManager = new User()

  useForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const userData = {
      username: document.getElementById('username').value
    }

    const result = userManager.saveUser(userData)

    if (result.success) {
      return (window.location.href = '../signin')
    } else {
      console.log('Proses simpan data gagal')
    }
  })
})
