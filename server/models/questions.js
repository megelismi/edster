var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
	english: String,
	french: String
})

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;


// // persistent
// a: [{english: "pineapple", french: "ananas", id: 123}, {english: }] // 25



// b: [{question: 123, rating: 1}] // 25

// mixed: [{english: "pineapple", french: "ananas", id: 123, rating: 2}, {english: "hello", french: "bonjour", id: 456}]

// // on login
// >> front end sends query, back end queries a & b, back end creates 'mixed' array and sends that to front end
// // create question set using algorithm + user history + questions

// // as user answers, keep track of progress on front end
// >> answers: [{question: 123, rating: 2}, {question: 123, correct: true}, {question: 123, correct: true}]

// // after 25 questions
// >> send answers and update userHistory
// // send user progress & update user history
// // query user to keep playing, if yes, repeat process
