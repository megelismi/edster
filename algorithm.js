
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
        "french": "l\"immeuble",
        "english": "building",
        "id": 5
    },
    {
        "french": "la femme",
        "english": "woman",
        "id": 6
    },
    {
        "french": "l\"homme",
        "english": "man",
        "id": 7
    },
    {
        "french": "la famille",
        "english": "family",
        "id": 8
    },
    {
        "french": "les devoirs",
        "english": "homework",
        "id": 9
    },
    {
        "french": "le chien",
        "english": "dog",
        "id": 10
    },
    {
        "french": "le chat",
        "english": "cat",
        "id": 11
    },
    {
        "french": "la rue",
        "english": "street",
        "id": 12
    },
    {
        "french": "les mains",
        "english": "hands",
        "id": 13
    },
    {
        "french": "les yeux",
        "english": "eyes",
        "id": 14
    },
    {
        "french": "la faim",
        "english": "hunger",
        "id": 15
    }
]


let userQuestions = questions; 

const assignCorrectness = (inputQuestion, bool) => {
  userQuestions.forEach(function(question) {
    if (inputQuestion.id == question.id) {
      question.correct = bool; 
    }
  });
};

// assignCorrectness({ french: "le pain', english: 'bread', id: 1 }, false); 

const spaceQuestions = questionObj => {
  let lastQuestionAnswered = questionObj;

  if (!lastQuestionAnswered.correct) {
    var question = userQuestions.splice(0, 1)
    userQuestions.splice(3, 0, question); 
  }
  else {
    var shifted = userQuestions.shift(); 
    userQuestions.push(lastQuestionAnswered); 
  }
  
  return userQuestions; 
  
}


