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

app.get('/test', jsonParser, (req, res) => {
    User.find({}, (err, data) => {
        console.log('data', data); 
        if (err){
            console.log("error was made:", err); 
            res.send(err); 
        }
        res.status(200).json(data);
    })
})

app.post('/test', jsonParser, (req, res) => {
    console.log(req.body)
    User.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
})

app.put('/test/:id', jsonParser, (req, res) => {
   const {id} = req.params;
   const {body} = req; 
   User.findByIdAndUpdate(id, body) 
   .then(data => res.status(200).json(data))
   .catch(err => console.log(err))
})

app.delete('/test/:id', (req, res) => {
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
