var mongoose = require("mongoose");
var Note = require("./Note");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes: [{
     type: Schema.Types.ObjectId,
     ref: "Note"
  }]
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;