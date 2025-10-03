const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
  let response = '<h1>Index</h1>'
  response += '<h2>Welcome to the index page</h2>'
  res.send(response)
  console.log(`Index page accessed`)
})

module.exports = router
