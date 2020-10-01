const express = require('express')
const app = express()
const { PORT } = require('./config')
const payment = require('./routes/api/payment')
// const PORT = 3000

app.use('/api/payment', payment)

app.get('/', (req,res) => res.send('Hello World'))

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
)