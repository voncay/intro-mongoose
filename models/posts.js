const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true}, // String is shorthand for {type: String}
  author: {type: String, required: true},
  body: String,
  date: {type: Date, default: Date.now},
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Users' // create the association with the other collection through the userId
  }
});

module.exports = mongoose.model('Post', postSchema); // Post is the name of the collection, really ? Not dataset ?
// module.exports = mongoose.model('Post', postSchema, "dataset");
