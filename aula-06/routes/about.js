const express = require('express')
const router = express.Router()

// Rotas para a página "Sobre"
router.get('/', (req, res) => {
  res.send('About Us Page')
  console.log('About page accessed')
})

module.exports = router
