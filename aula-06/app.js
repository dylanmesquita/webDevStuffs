const express = require('express')
const app = express()
const router = express.Router()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//rotas
const userRoutes = require('./routes/users')
const indexRoutes = require('./routes/index')
const newsRoutes = require('./routes/news')
const aboutRoutes = require('./routes/about')

app.use('/', indexRoutes)
app.use('/users', userRoutes)
app.use('/news', newsRoutes)
app.use('/about', aboutRoutes)

app.use((err, req, res, next) =>{

console.error(err.stack)
res.status(404).send('Page not found!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
