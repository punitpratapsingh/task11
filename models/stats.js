const mongoose = require('mongoose')

// quiz schema
const QuizRecordsSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    attempt: { type: String, required: true },
    attemptedAt: { type: String, required: true },
    quizId: { type: String, required: false },
    questions: { type: Array, required: true },
    score: { type: Object, required: true },
  },
  { collection: 'quizRecords' }
)

const QuizSchema = new mongoose.Schema(
  {
    attempt: { type: Number, required: true },
    questions: { type: Array, required: true },
    name: { type: Object, required: true },
  },
  { collection: 'quizzes' }
)

const QuestionSchema = new mongoose.Schema(
  {
    attempt: { type: Number, required: true },
    difficulty: { type: Number, required: true },
    question: { type: String, required: true },
    options: { type: Array, required: true },
    ans: { type: Array, required: true },
  },
  { collection: 'questions' }
)

const QuizRecords = mongoose.model('quizRecords', QuizRecordsSchema)
const Quiz = mongoose.model('quiz', QuizSchema)
const Question = mongoose.model('question', QuestionSchema)

module.exports = { QuizRecords, Quiz, Question }
