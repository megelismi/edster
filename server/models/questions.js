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
// send user progress & update user history
// query user to keep playing, if yes, repeat process

let questions = [
    {
        "french": "le pain",
        "english": "bread",
        "id": 1
    },
    {
        "french": "le poisson",
        "english": "fish",
        "id": 2
    },
    {
        "french": "le pamplemousse",
        "english": "grapefruit",
        "id": 3
    },
    {
        "french": "le velo",
        "english": "bicycle",
        "id": 4
    }, 
     {
        "french": "bonjour",
        "english": "hello",
        "id": 5
    }
    
];

let userHistory = [
    {
        id: 1,
        rating: 0
    },
    {
        id: 2,
        rating: 2
    },
    {
        id: 3,
        rating: 1
    },
    {
        id: 4,
        rating: 1
    }, 
     {
        id: 5,
        rating: 1
    }
  
];

let userQuestions = questions; 

// userQuestions.forEach(function(question) {
//   question.correct = true; 
// })

// const assignCorrectness = (inputQuestion, bool) => {
//   userQuestions.forEach(function(question) {
//     if (inputQuestion.id == question.id) {
//       question.correct = bool; 
//     }
//   });
// };

// assignCorrectness({ french: 'le pain', english: 'bread', id: 1 }, true); 

// const spaceQuestions = array => {
//   let lastQuestionAnswered = array[0];
  
//   if (!lastQuestionAnswered.correct) {
//     var question = userQuestions.splice(0, 1)
//     userQuestions.splice(3, 0, question); 
//   }
//   else {
//     var shifted = userQuestions.shift(); 
//     userQuestions.push(lastQuestionAnswered); 
//   }
  
//   return userQuestions; 
  
// }

// spaceQuestions(userQuestions); 
