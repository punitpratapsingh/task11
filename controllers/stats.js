let QuizRecordsModel = require('../models/stats')
let CustomError = require('../custom_error')

class Stats {
  constructor(payload, params = null) {
    this.payload = payload
    this.params = params
  }
  
  async getQuizList() {
    try {
      let response = await QuizRecordsModel.Quiz.find({})
      if (response) {
        return response
      } else {
        throw new CustomError('not working', 500, 'getQuizList')
      }
    } catch (error) {
      throw new CustomError(error.message, error.statusCode, error.functionName)
    }
  }

  async getQuiz() {
    try {
      const { id } = this.params
      let response = await QuizRecordsModel.Quiz.find({_id:id})
      if (response) {
        return response
      } else {
        throw new CustomError('not working', 500, 'getQuiz')
      }
    } catch (error) {
      throw new CustomError(error.message, error.statusCode, error.functionName)
    }
  }
  async getQuestion() {
    try {
      const { id } = this.params
      let response = await QuizRecordsModel.Question.find({_id:id})
      if (response) {
        return response
      } else {
        throw new CustomError('not working', 500, 'getQuestion')
      }
    } catch (error) {
      throw new CustomError(error.message, error.statusCode, error.functionName)
    }
  }
  async getQuizRecords() {
    try {
      let response = await QuizRecordsModel.QuizRecords.find({})
      if (response) {
        return response
      } else {
        throw new CustomError('not working', 500, 'getQuizRecords')
      }
    } catch (error) {
      throw new CustomError(error.message, error.statusCode, error.functionName)
    }
  }

  
  
  async NewQuiz() {
    try {
      const { name, questions } = this.payload
      const newQuiz = new QuizRecordsModel.Quiz({
        name: name,
        questions: questions,
        attempt: 0,
      })
      const save = await newQuiz.save()
      return { success: true, message: 'New quiz created.' }
    } catch (error) {
      throw new CustomError(error.message, error.statusCode, error.functionName)
    }
  }

  async NewQuestion() {
    try {
      const { options, question, difficulty, ans } = this.payload
      const newQuestion = new QuizRecordsModel.Question({
        options: options,
        question: question,
        attempt: 0,
        difficulty: difficulty,
        ans: ans
      })
      const save = await newQuestion.save()
      return { success: true, message: 'New question created.' }
    } catch (error) {
      throw new CustomError(error.message, error.statusCode, error.functionName)
    }
  }
}

module.exports = Stats
