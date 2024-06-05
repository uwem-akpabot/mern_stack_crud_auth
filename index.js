const express = require('express')
const app = express()

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000', // React app's address
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // Enable this if you need to send cookies with the requests
}));

// data array
let students = [
    {
        id: 1,
        fname: 'John',
        sname: 'Doe',
        gender: 'Male',
    }, 
    {
        id: 1,
        fname: 'Ada',
        sname: 'Lovelace',
        gender: 'Female',
    }, 
    {
        id: 3,
        fname: 'Elizabeth',
        sname: 'Neale',
        gender: 'Female',
    }
]

// endpoints
app.get('/api/students', (request, response) => {
    response.json(students)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})