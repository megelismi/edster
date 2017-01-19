import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import GoogleStrategy from 'passport-google-oauth20';
import passport from 'passport';
import User from './models/users';
import Question from './models/questions';
import router from './api';

mongoose.Promise = global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(process.env.CLIENT_PATH));

// AUTH

passport.use(new GoogleStrategy({
    clientID: '184969871177-ebemsponpqfaf7llf32pg1j74799rv90.apps.googleusercontent.com',
    clientSecret: 'LWwSpw-fMa-v7sVyzn9s3fui',
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
	function(accessToken, refreshToken, profile, callback) {
		User.findOneAndUpdate({ googleID: profile.id },
			{ $set: {
				googleID: profile.id,
				accessToken: accessToken,
				name: profile.displayName
			} },
			{ upsert: true, setDefaultsOnInsert: true, 'new': true }).then((user) => {
				callback(null, user)
			}).catch((err) => {
				console.log(err);
			});
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  function(req, res) {
    // Successful authentication, redirect home.
		console.log('req user', req.user);
		res.cookie('accessToken', req.user.accessToken, { expires: 0, httpOnly: false })
    res.cookie('id', req.user.googleID, { expires: 0, httpOnly: false })
		res.redirect('/#/quiz');
  });


// API ENDPOINTS

app.get('/users/:id/questions', passport.authenticate('bearer', { session: false }), jsonParser, (req, res) => {
    const { id } = req.params;
    User.findOne({'googleID': id}, (err, data) => {
        if (err){
            console.log("error was made:", err);
            res.send(err);
        }
        res.status(200).json(data.questionBank[0]);
    })
})


app.get('/users/:id', passport.authenticate('bearer', { session: false }),
		(req, res) => {
    const { id } = req.params;
    User.findOne({'googleID': id}, (err, data) => {
        if (err){
            console.log("error was made:", err);
            res.send(err);
        }
        console.log(data);
        res.status(200).json(data.name);
    })
})


app.put('/users/:id/questions', passport.authenticate('bearer', { session: false }), jsonParser, (req, res) => {
   const {id} = req.params;

   const {body} = req;


   let updatedQuestionBank;

    User.findOne({'googleID': id}, (err, data) => {
        if (err){
            console.log("error was made:", err);
            res.send(err);
        }
        updatedQuestionBank = spaceQuestions(data.questionBank, body.result);
        data.questionBank = updatedQuestionBank;
        console.log('updated', updatedQuestionBank)
        data.save();
        res.status(200).json({});
    })
});

const spaceQuestions = (array, lastQuestionAnswered) => {
  if (!lastQuestionAnswered.correct) {
    var question = array.splice(0, 1)
    array.splice(3, 0, question[0]);
  }
  else {
    var shifted = array.shift();
    array.push(lastQuestionAnswered);
  }
  return array;
}

app.post('/users', jsonParser, (req, res) => {
    console.log(req.body)
    User.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
})


app.post('/questions', jsonParser, (req, res) => {
    console.log(req.body)
    Question.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
})


app.delete('/users/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch(err => console.log('delete error'))
})
function runServer() {
    var databaseUri = process.env.DATABASE_URI || global.databaseUri || 'mongodb://user:user@ds119748.mlab.com:19748/flashcards';
    mongoose.connect(databaseUri)
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}
if (require.main === module) {
    runServer();
}
