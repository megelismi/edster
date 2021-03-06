import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import GoogleStrategy from 'passport-google-oauth20';
import passport from 'passport';
import User from './models/users';
import Question from './models/questions';
import router from './api';
import dotenv from 'dotenv';
dotenv.config({ silent: true });

mongoose.Promise = global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
const jsonParser = bodyParser.json();

// if statement for testing server
if(process.env.CLIENT_PATH) {
  app.use(express.static(process.env.CLIENT_PATH));
}

// AUTH

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
	function(accessToken, refreshToken, profile, callback) {
		User.findOneAndUpdate({ googleID: profile.id },
			{ $set: {
				googleID: profile.id,
				accessToken: accessToken,
				name: profile.name.givenName
			} },
			{ upsert: true, setDefaultsOnInsert: true, 'new': true }).then((user) => {
				callback(null, user)
			}).catch((err) => {
				console.error(err);
			});
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  function(req, res) {
    // Successful authentication, redirect home.
		res.cookie('accessToken', req.user.accessToken, { expires: 0, httpOnly: false })
    res.cookie('id', req.user.googleID, { expires: 0, httpOnly: false })
		res.redirect('/#/quiz');
  });

app.get('/auth/logout', (req, res) => {
  req.logout();
  res.clearCookie('accessToken');
  res.clearCookie('id');
  res.redirect('/#/');
	// next step: revoke Google's token access
});

// API ENDPOINTS

function confirmMatchingUser (req, res, next) {
   const { id } = req.params;
   if (req.user.googleID !== id) {
      return res.status(403).json({"message": "unauthorized"});
    }

    next();
}

app.get('/users/:id/questions', passport.authenticate('bearer', { session: false }), jsonParser, confirmMatchingUser, (req, res) => {
    const { id } = req.params;

    User.findOne({'googleID': id}, (err, data) => {
        if (err){
            console.error(err);
            res.send(err);
        }

        console.log('body', res.body);

        res.status(200).json(data.questionBank[0]);
    });
});

app.get('/users/:id/questions-array', passport.authenticate('bearer', { session: false }), jsonParser, confirmMatchingUser, (req, res) => {
    const { id } = req.params;
    User.findOne({'googleID': id}, (err, data) => {
        if (err){
            console.error(err);
            res.send(err);
        }
        res.status(200).json(data.questionBank);
    });
});

// redundancy here because bearer token already contains user info
app.get('/users/:id', passport.authenticate('bearer', { session: false }),  confirmMatchingUser, (req, res) => {
    const { id } = req.params;
    User.findOne({'googleID': id}, (err, data) => {
        if (err){
            console.error(err);
            res.send(err);
        }
        res.status(200).json(data.name);
    });
});


app.put('/users/:id/questions', passport.authenticate('bearer', { session: false }), jsonParser, (req, res) => {
   const {id} = req.params;
   const {body} = req;

   let updatedQuestionBank;

    User.findOne({'googleID': id}, (err, data) => {
        if (err){
            console.error(err);
            res.send(err);
        }
        updatedQuestionBank = spaceQuestions(data.questionBank, body.result);
        data.questionBank = updatedQuestionBank;
        data.save();
        res.status(200).json({});
    });
});

const spaceQuestions = (array, lastQuestionAnswered) => {
	let newArray;
  if (lastQuestionAnswered.correct === 'false') {
    newArray = array.slice(1, array.length);
    newArray.splice(3, 0, lastQuestionAnswered);
  }
  else {
    var shifted = array.shift();
    array.push(lastQuestionAnswered);
		newArray = array;
  }
  return newArray;
}

//used by the developers for testing the database

app.post('/users', jsonParser, (req, res) => {
    console.log(req.body)
    User.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => console.error(err))
});

app.post('/questions', jsonParser, (req, res) => {
    console.log(req.body)
    Question.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => console.error(err))
});

//will use later when delete user functionality is added 

app.delete('/users/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch(err => console.error(err))
});

// .env to hide usernames, passwords, secrets...
let server;

function runServer() {
    var databaseUri = process.env.DATABASE_URI || global.databaseUri;
    mongoose.connect(databaseUri) // should be promise here
    return new Promise((resolve, reject) => {
        server = app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
            // add to allow server to closer in tests
            resolve(server);
        });
    });
}
if (require.main === module) {
    runServer();
}

// function runServer() {
//   return new Promise((resolve, reject) => {
//     server = app.listen(PORT, HOST, () => {
//       console.log(`Your app is listening on port ${PORT}`);
//       resolve(server);
//     }).on('error', err => {
//       reject(err)
//     });
//   });
// }

// create stop server function for testing
function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

// export for testing
export { app, runServer, closeServer };
