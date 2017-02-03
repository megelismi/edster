import { app, runServer, closeServer } from './../../server/index';

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

  it('Should prevent unauthorized users', function(done) {
    chai.request(app)
    .get('/users/12/questions')
    .end((err, res) => {
      res.unauthorized.should.equal(true);
      done();
    });
  });

  //logged in as one user and cannot access other users' info
  it('Should get ')
});
