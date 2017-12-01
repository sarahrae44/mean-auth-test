const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  date: { type: String, require: true },
  notes: { type: String },
  photos: { type: Array }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
