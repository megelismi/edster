import proxyquire from 'proxyquire'

const server = require('./../../server/index')
const { app, runServer, closeServer } = server

// const appWithFakePassport = mockedServer.app
const appWithFakePassport = function(options) {
  const mockedServer = proxyquire('./../../server/index', {
    'passport': {
      use: function() {},
      authenticate: function() {
        return function(req, res, next) {
          req.user = options.user
          next();
        };
      }
    }, 
    './models/users': {
      findOne: function(obj, fn) {
        fn(null, {questionBank: [{}], name: "Tom"})
      }
    }
  })

  return mockedServer.app
}

import chai from 'chai';
import chaiHttp from 'chai-http';

const should = chai.should();

chai.use(chaiHttp);

describe('Server', () => {

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  //array of endpoints

  //forEach with the code below, and the only thing that changes is line 26


  const mockedAppWithWrongId = appWithFakePassport({ user: {
      googleID: 'nomatch'
    }})

    const mockedAppWithCorrectId = appWithFakePassport({ user: {
      googleID: '12'
    }})

  // real passport
  it('Should prevent unauthorized users', function(done) {
    chai.request(app)
    .get('/users/12/questions')
    .end((err, res) => {
      res.unauthorized.should.equal(true);
      done();
    });
  });

    it('Should return a single question object', function (done) {
    chai.request(mockedAppWithCorrectId)
    .get('/users/12/questions')
    .end((err, res) => {
      res.should.be.json;
      res.status.should.equal(200);
      res.body.should.be.a('object');
      done(); 
    })
  })

  // fake passport
  //logged in as one user and cannot access other users' info
  it('Should prevent users from seeing another users question', function (done) {
    
    chai.request(mockedAppWithWrongId)
    .get('/users/12/questions')
    .end((err, res) => {
      res.should.be.json;
      res.status.should.equal(403);
      done();
    })
  })


  it ('Should return a questions array', function (done) {
    chai.request(mockedAppWithCorrectId)
    .get('/users/12/questions-array')
    .end((err, res) => {
      res.should.be.json;
      res.status.should.equal(200);
      res.body.should.be.a('array'); 
      done();
    })
  })

  it('Should prevent users from seeing others question array', function (done) {
    chai.request(mockedAppWithWrongId)
    .get('/users/12/questions-array')
    .end((err, res) => {
      res.should.be.json;
      res.status.should.equal(403); 
      done(); 
    })
  })

  it('Should return a users name', function (done) {
    chai.request(mockedAppWithCorrectId)
    .get('/users/12')
    .end((err, res) => {
      res.should.be.json;
      res.status.should.equal(200); 
      res.body.should.be.a('string');
      res.body.should.equal('Tom'); 
      done();
    })
  })

  it('Should prevent users from seeing another users name', function (done) {
    chai.request(mockedAppWithWrongId) 
    .get('/users/12')
    .end((err, res) => {
      res.should.be.json; 
      res.status.should.equal(403); 
      done(); 
    })
  })

  it('Should update the questions array when the user answers', function (done) {
    
  })




  })

  //test that you get the correct response back
  //test that you are getting the correct json data back
