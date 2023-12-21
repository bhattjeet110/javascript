const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About US!')
  })
  app.get('/map', (req, res) => {
    res.send('Contact US!')
  })
  app.get('/jeet', (req, res) => {
    res.send('JEET TU US!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})