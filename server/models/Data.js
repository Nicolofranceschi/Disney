const { Schema, model } = require('mongoose');


const DataSchema = new Schema({
  name: String,
  voto: String,
  condotta: String,
});

module.exports = model('Data', DataSchema);