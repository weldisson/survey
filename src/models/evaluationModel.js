const mongoose = require('mongoose')

const evaluationSchema = new mongoose.Schema({
  seller: String,
  evaluation: [{
    name: String,
    phone: String,
    note: Number,
    comment: String
  }]
}, { timestamps: true })

module.exports = mongoose.model('evaluation', evaluationSchema)