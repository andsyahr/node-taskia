const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3000

// Serve all static files from 'public' directory:
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  if (!path.extname(req.path)) {
    // no extension in url path
    const htmlFilePath = path.join(__dirname, 'public', req.path + '.html')
    fs.access(htmlFilePath, fs.constants.F_OK, (err) => {
      if (!err) {
        return res.sendFile(htmlFilePath)
      }
      next()
    })
  } else {
    next()
  }
})

app.get('/', (req, res) => {
  res.redirect('/signin')
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
