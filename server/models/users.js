var mongoose = require('mongoose');

// add default values

var userSchema = mongoose.Schema({
    name: {
        type: Object,
        required: true
    },
    googleID: {
        type: String,
        required: true
    },
    accessToken: {
        type: String,
        required: true
    },
    correctInARow: Array,
    masteredWords: Array,
    unMasteredWords: Array,
    questionBank: {
        type: Array, 
        default:  [
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
                "french": "l'immeuble",
                "english": "building",
                "id": 5
            },
            {
                "french": "la femme",
                "english": "woman",
                "id": 6
            },
            {
                "french": "l'homme",
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
    }
})

var User = mongoose.model('User', userSchema);

module.exports = User;

// {"name": "Megan",
// "questionBank":  [
//     {
//         "french": "le pain",
//         "english": "bread",
//         "id": 1
//     },
//     {
//         "french": "le poisson",
//         "english": "fish",
//         "id": 2
//     },
//     {
//         "french": "le pamplemousse",
//         "english": "grapefruit",
//         "id": 3
//     },
//     {
//         "french": "le velo",
//         "english": "bicycle",
//         "id": 4
//     },
//     {
//         "french": "l'immeuble",
//         "english": "building",
//         "id": 5
//     },
//     {
//         "french": "la femme",
//         "english": "woman",
//         "id": 6
//     },
//     {
//         "french": "l'homme",
//         "english": "man",
//         "id": 7
//     },
//     {
//         "french": "la famille",
//         "english": "family",
//         "id": 8
//     },
//     {
//         "french": "les devoirs",
//         "english": "homework",
//         "id": 9
//     },
//     {
//         "french": "le chien",
//         "english": "dog",
//         "id": 10
//     },
//     {
//         "french": "le chat",
//         "english": "cat",
//         "id": 11
//     },
//     {
//         "french": "la rue",
//         "english": "street",
//         "id": 12
//     },
//     {
//         "french": "les mains",
//         "english": "hands",
//         "id": 13
//     },
//     {
//         "french": "les yeux",
//         "english": "eyes",
//         "id": 14
//     },
//     {
//         "french": "la faim",
//         "english": "hunger",
//         "id": 15
//     }
// ]
// }
