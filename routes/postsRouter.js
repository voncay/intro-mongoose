const postsRouter = require('express').Router()
const Posts = require('../models/posts')
const posts = require('../models/posts')

postsRouter.get('/posts', (req, res) => {
  Posts
  .find()
  .populate('userId')
  .then(posts => res.json(posts))
  .catch(err => res.json(err))
})

postsRouter.post('/posts', (req, res) => {
  Posts
  .create(req.body)
  .then(newPost => res.json(newPost))
  .catch(err => res.json(err))
})

module.exports = postsRouter
