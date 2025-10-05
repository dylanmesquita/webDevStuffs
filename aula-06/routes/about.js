const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.send('About Us Page')
  console.log('About page accessed')
})

module.exports = router
