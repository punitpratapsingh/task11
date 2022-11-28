'use strict'
require('dotenv').config()
let express = require('express')
const mongoose = require('mongoose')
let routes = require('./routes/index')
const cors = require('cors')
let app = express()
app.use(express.json());
app.use(cors())
app.use('/', routes)
const PORT = process.env.PORT || 3000
mongoose.connect(
  process.env.MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) return console.log('Error: ', err)
    console.log(
      'MongoDB Connection -- Ready state is:',
      mongoose.connection.readyState
    )
  }
)
app.get('/', async (req, res) => {
  try {
    res.send('Working fine')
  } catch (error) {
    console.log('error', error)
    res
      .status(error.statusCode || 500)
      .send({ success: false, message: error.message })
  }
})
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

module.exports = app
