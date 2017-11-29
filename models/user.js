const mongoose = require('mongoose');
const Article = require('./articles.js');

const userSchema = new mongoose.Schema({
 username: String,
 password: String,
 articles: [Article.schema]
})

const User = mongoose.model('User', userSchema);

module.exports = User;
