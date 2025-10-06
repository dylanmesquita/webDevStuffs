const express = require('express');
const router = express.Router();

const data = {
  time: new Date(),
  message: 'Hello, this is some data!'
};

router.post('/', (req, res) => {
  res.json(data);
});

module.exports = router;
