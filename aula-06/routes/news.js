cons
const router = express.Router()

// Rotas para notícias
router.get('/', (req, res) => {
  res.send('List of news articles')
  console.log('News base route accessed')
})

router.get('/:id', (req, res) => {
  res.send(`Details of news article ${req.params.id}`)
  console.log(`News article ${req.params.id} accessed`)
})

module.exports = router