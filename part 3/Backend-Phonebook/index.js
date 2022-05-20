const express = require('express')
const app = express()
const port = 3000

let persons = [
  {
    id: 1,
    content: "Arto Hellas",
    number: "111111",
  },
  {
    id: 2,
    content: "Ada Lovelace",
    number: "222222",
  },
  {
    id: 3,
    content: "Dan Abramox",
    number: "333333",
  },
  {
    id: 4,
    content: "Mary Poppendick",
    number: "444444",
  },
]
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/persons', (req, res) => {
  res.send(persons)
})
app.get('/api/persons/:id', (req, res) => {
  const person = persons.filter(person => person.id === Number(req.params.id))

  if (person.length === 0) {
    return res.status(400).json({
      error: 'content missing'
    })
  }
  res.send(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const id = Math.floor(Math.random() * (99999 - 01))
  const persona = { id, content: 'fulanito', number: '23123' }
  persons = persons.concat(persona)
  res.send(persons)
})

const date = new Date()
app.get('/info', (req, res) => {
  res.write(`Phonebook has info for ${persons.length} people`)
  res.write(`${date}`)
  res.end()

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
