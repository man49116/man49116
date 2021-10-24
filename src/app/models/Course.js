const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxlength: 600 },
  decription: { type: String, maxlength: 600 },
  image: { type: String, maxlength: 255 },
  createrAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
