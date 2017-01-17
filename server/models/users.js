var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String, 
	answerHistory: Array
})

var User = mongoose.model('User', userSchema);

module.exports = User;