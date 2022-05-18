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


app.get('/api/persons', (req, res) => {
  res.send(persons)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
