const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, 'public')))

const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/users')
const newsRoutes = require('./routes/news')
const aboutRoutes = require('./routes/about')

app.use('/', indexRoutes)
app.use('/users', userRoutes)
app.use('/news', newsRoutes)
app.use('/about', aboutRoutes)

app.use((req, res) => {
  res.status(404).send('Page not found!')
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Internal Server Error')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
