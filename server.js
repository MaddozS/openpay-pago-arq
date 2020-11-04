const express = require('express')
const app = express()

const { PORT, BASE_URL } = require('./config')
const payment = require('./routes/api/payment')
const user = require('./routes/api/user')
const card = require('./routes/api/card')

var multer = require('multer');
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

var upload = multer();

app.use(cors())
app.use(morgan('tiny'))

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.use('/api/payment', payment)
app.use('/api/card', card)
app.use('/api/user', user)


app.get('/', (req,res) => res.send('Hello World'))

app.listen(PORT, () =>
    console.log(`App listening at http://${BASE_URL}:${PORT}`)
)