let merged = [
	{
		french: 'le pain',
		english: 'bread',
		id: 1,
		rating: 1
	},
	{
		french: 'le poisson',
		english: 'fish',
		id: 2,
		rating: 0
	},
	{
		french: 'le pamplemousse',
		english: 'grapefruit',
		id: 3,
		rating: 2
	},
	{
		french: 'le velo',
		english: 'bicycle',
		id: 4,
		rating: 1
	},
	{
		french: 'l\'immeuble',
		english: 'building',
		id: 5,
		rating: 0
	}
]

const rejectionSample = (questions) => {
	let selected, idx;
	let num = Math.floor(Math.random() * 6) + 1;

	if (num === 1) {
		val = 2
	} else if (num > 1 && num < 4) {
		val = 1
	} else {
		val = 0
	}







































// var languageData = {"hola": "hello", "adios": "goodbye", "si": "yes", "mesa": "table"};
// var languageData = [
// 	{"hola": "hello", frequency: 1},
// 	{"adios": "goodbye", frequency: 2},
// 	{"si": "yes", frequency: 1},
// 	{"mesa": "table", frequency: 0}
// ];

//function that presents each pair in the object an equal number of times

	//input array of objects that holds language pairs and frequency ratings
	//output should output one spanish word semi-randomly based off of their frequency ratings

	//0 gets pushed in (1)
	//1 gets (2)
	//2 gets (4)

	//find the lowest frequency rating use that as the base
	//conditional: if a number is higher than the frequency rating by 1, push it in 2n times, difference of 2 gets pushed in 4n times

	//generate a random index
	//return that item at the random index

	//["hola", "hola" "si", "mesa", "si", "adios", "adios", "adios", "adios"]

//function that manipulates the frequency rating based on user performance (function adjustFrequency())

	//all words start with 1, if they get it right it decrements by 1, if they get it wrong it increments by 1.
	//maxes out at 0 and 2.


// const languageData = [
// 	{"hola": "hello", frequency: 1},
// 	{"adios": "goodbye", frequency: 2},
// 	{"si": "yes", frequency: 1},
// 	{"mesa": "table", frequency: 0}
// ];


// const outputVocab = array => {
//   var words = [];
//   array.forEach(function(object) {

//   })
// }
