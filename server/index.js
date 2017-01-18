import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import User from './models/users';

mongoose.Promise = global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(process.env.CLIENT_PATH));


// app.get('/users', jsonParser, (req, res) => {
//     User.find({}, (err, data) => {
//         console.log('data', data);
//         if (err){
//             console.log("error was made:", err);
//             res.send(err);
//         }
//         res.status(200).json(data);
//     })
// })

app.get('/users', jsonParser, (req, res) => {
    User.find({}, (err, data) => {
        if (err){
            console.log("error was made:", err);
            res.send(err);
        }
        res.status(200).json([
					{ _id: '587e7f6c6c90cd0f37ad6080',
    				name: 'Bob',
    				__v: 0,
    				answerHistory: [
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
						] } ]);
    });
});

app.get('/users/:username', jsonParser, (req, res) => {
    const {username} = req.params;
    User.findOne(username, (err, data) => {
        console.log('data', data);
        if (err){
            console.log("error was made:", err);
            res.send(err);
        }
        res.status(200).json(data);
    })
})

app.post('/users', jsonParser, (req, res) => {
    console.log(req.body)
    User.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
})

app.put('/users/:id', jsonParser, (req, res) => {
   const {id} = req.params;
   const {body} = req;
   User.findByIdAndUpdate(id, body)
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
