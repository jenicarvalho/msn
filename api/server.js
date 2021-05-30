const express = require('express')
const connectDB = require('./config/db')
const app = express()

// Connect DB
connectDB()


// Init middleware
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/profile', require('./routes/profile'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.info(`:::: Server iniciado na porta ${PORT} ::::`))