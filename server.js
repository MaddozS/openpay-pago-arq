const express = require('express')
const app = express()
const { PORT, BASE_URL } = require('./config')
const payment = require('./routes/api/payment')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const PORT = 3000

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.use('/api/payment', payment)

app.get('/', (req,res) => res.send('Hello World'))

app.listen(PORT, () =>
    console.log(`App listening at http://${BASE_URL}:${PORT}`)
)