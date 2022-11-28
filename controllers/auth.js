let UsersModel = require('../models/users')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
let CustomError = require('../custom_error')
const Joi = require('joi')
const signUpSchema = Joi.object({
  email: Joi.string().min(5).max(30).required(),
  password: Joi.string().min(5).max(10).required(),
  type: Joi.number().min(1).required(),
})
class Auth {
  constructor(payload, params = null) {
    this.payload = payload
    this.params = params
  }

  async login() {
    try {
      const { email, password } = this.payload
      let response = await UsersModel.findOne({ email: email })
      if (response) {
        const validPwd = await bcrypt.compare(password, response.password)
        if (!validPwd) {
          throw new CustomError('Wrong Password', 500, 'login')
        } else {
          const token = await jwt.sign(
            { _id: response._id },
            process.env.TOKEN_SECRET
          )
          return {
            authToken: token,
            userDetails: {
              id: response._id,
              email,
              type: response.type,
            },
          }
        }
      } else {
        throw new CustomError('No user found', 500, 'login')
      }
    } catch (error) {
      throw new CustomError(error.message, error.statusCode, error.functionName)
    }
  }
  async signUp() {
    try {
      const { email, password, type } = this.payload
      let response = await UsersModel.findOne({ email: email })
      if (response) {
        throw new CustomError('User already exists', 500, 'signUp')
      } else {
        let salt = await bcrypt.genSalt(10)
        let hashedPwd = await bcrypt.hash(password, salt)

        const newUser = new UsersModel({
          email: email,
          password: hashedPwd,
          type: type,
        })

        const save = await newUser.save()
        return { success: true, message: 'New user created.' }
      }
    } catch (error) {
      throw new CustomError(error.message, error.statusCode, error.functionName)
    }
  }
}
module.exports = Auth
