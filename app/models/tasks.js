//load mogoose
var mogoose = require('mongoose');

moduke.exports = mongoose.model('Tasks',{
  texts : String,
  done : Boolean
});
