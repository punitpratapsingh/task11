let UsersModel = require('../models/users')
let CustomError = require('../custom_error')

class Users {
  constructor(payload, params = null) {
    this.payload = payload
    this.params = params
  }

  async getList() {
    try {
      let response = await UsersModel.find({})
      console.log('scscsds')
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

module.exports = Users
