var jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const token = req.header('Authorization')
    if (!token) {
      return res.status(401).send('Access Denied')
    }
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    if (!verified) {
      res.status(400).send('Invalid Token')
    }
    req.user = verified
    next()
  } catch (error) {
    res.status(400).send('Invalid Token')
  }
}
