let QuestionModel = require('../models/questions')
let CustomError = require('../custom_error')

class Question {
  constructor(payload, params = null) {
    this.payload = payload
    this.params = params
  }

  async getList() {
    try {
      let response = await QuestionModel.find({})
      if (response) {
        return response
      } else {
        throw new CustomError('not working', 500, 'fetchQuestions')
      }
    } catch (error) {
      throw new CustomError(error.message, error.statusCode, error.functionName)
    }
  }
}

module.exports = Question
