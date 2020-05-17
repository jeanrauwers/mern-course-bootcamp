const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserController = require('./controllers/UserController')

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

app.get('/', (req, res) => {
	res.send('Hello from Node.js app \n')
})

app.get('/register', (req, res) => {
	res.send('Welcome to Register \n')
})

app.post('/register', UserController.store)

try {
	mongoose.connect(process.env.MONGO_DB_SECRET, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	console.log('MongoDb connected successfully!')
} catch (error) {
	console.log(error)
}

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})
