document.addEventListener('DOMContentLoaded', () => {
  const useForm = document.getElementById('taskForm')
  const taskManager = new Task()

  useForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const taskData = {
      taskName: document.getElementById('taskName').value,
      taskPriority: document.getElementById('taskPriority').value,
      createdAt: new Date().toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    const result = taskManager.saveTask(taskData)

    if (result.success) {
      alert('Berhasil menyimpan')
      return (window.location.href = '../tasks')
    } else {
      console.log('Proses simpan data gagal')
    }
  })
})
