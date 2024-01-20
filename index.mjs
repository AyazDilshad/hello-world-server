import express from 'express';

const app = express()

app.get('/', (req, res) => {
  console.log('Hello World!', new Date())
  res.send('Hello World! im a Server'+ new Date()) 
})
app.get('/profile', (req, res) => {
  console.log('this is profile ', new Date())
  res.send('this message form server side  '+ new Date()) 
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example Server listening on port ${PORT}`)
})
