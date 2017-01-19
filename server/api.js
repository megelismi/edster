import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import BearerStrategy from 'passport-http-bearer';
import User from './models/users';

const router = express.Router();

mongoose.Promise = global.Promise;

passport.use(new BearerStrategy((token, done) => {
	// just looks for header w/ authorization & some sort of token prepended w/ bearer
	done(null, { user: 'text dummy' }, { scope: 'read' });
}));

router.get('/public', (req, res) => res.json({ message: 'I am public' }));

passport.use(new BearerStrategy((accessToken, done) =>
User.findOne({ accessToken })
	.then((user) => {
		done(null, user, { scope: 'read' });
	}).catch((err) => {
		done(err, null);
		console.log('Catch error', err);
	})
));

router.get('/questions', passport.authenticate('bearer', { session: false }),
(req, res) => res.json(req.user.questions));

module.exports = router;
