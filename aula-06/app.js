const express = require('express')
const app = express()
const router = express.Router()
const port = 3000

//rotas
const userRoutes = require('./routes/users')
const indexRoutes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRoutes)
app.use('/', indexRoutes)

module.exports = app
