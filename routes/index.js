var express = require('express')
var router = express.Router()
const AuthController = require('../controllers/auth')
const QuestionsController = require('../controllers/questions')
const UsersController = require('../controllers/users')
const StatsController = require('../controllers/stats')
const authToken = require('../middleware/authToken')

router.post('/login', async (req, res) => {
  try {
    let auth = new AuthController(req.body, req.params)
    let response = await auth.login()
    res.send(response)
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})
router.post('/signUp', async (req, res) => {
  try {
    let auth = new AuthController(req.body, req.params)
    let response = await auth.signUp()
    res.send(response)
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})
router.get('/quizList', authToken, async (req, res) => {
  try {
    let stats = new StatsController(req.body, req.params)
    let response = await stats.getQuizList()
    res.send(response)
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})
router.get('/quiz/:id', authToken, async (req, res) => {
  try {
    let stats = new StatsController(req.body, req.params)
    let response = await stats.getQuiz()
    res.send(response)
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})
router.get('/question/:id', authToken, async (req, res) => {
  try {
    let stats = new StatsController(req.body, req.params)
    let response = await stats.getQuestion()
    res.send(response)
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})
router.get('/questionsList', authToken, async (req, res) => {
  try {
    let questions = new QuestionsController(req.body, req.params)
    let response = await questions.getList()
    res.send(response)
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})
router.get('/usersList', authToken, async (req, res) => {
  try {
    let users = new UsersController(req.body, req.params)
    let response = await users.getList()
    res.send(response)
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})

router.get('/quizRecords', authToken, async (req, res) => {
  try {
    let stats = new StatsController(req.body, req.params)
    let response = await stats.getQuizRecords()
    res.send(response)
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})

router.post('/newQuiz', authToken, async (req, res) => {
  try {
    let stats = new StatsController(req.body, req.params)
    let response = await stats.NewQuiz()
    res.send(response)
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})
router.post('/newQuestion', authToken, async (req, res) => {
  try {
    let stats = new StatsController(req.body, req.params)
    let response = await stats.NewQuestion()
    res.send(response)
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})

module.exports = router
