var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  source: {
    type: String,
  },

  author: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  urlToImage: {
    type: String,
  },
  publsihedAt: {
    type: String,
  },
  content: {
    type: String,
  }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;