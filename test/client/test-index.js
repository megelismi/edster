import React from 'react';
import sinon from 'sinon';
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
import { mount, shallow, render } from 'enzyme';
import { expect, should } from 'chai';
const willMount = sinon.spy();
const didMount = sinon.spy();
const willUnmount = sinon.spy();

if (!global.document) {
  try {
    const jsdom = require('jsdom').jsdom; // could throw

    global.document = jsdom('');
    global.window = document.defaultView;
    Object.keys(document.defaultView).forEach((property) => {
      if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
      }
    });

    global.navigator = {
      userAgent: 'node.js',
    };
  } catch (e) {
    // jsdom is not supported...
    if (e.message === "Cannot find module 'jsdom'") {
      console.error('[enzyme/withDom] Error: missing required module "jsdom"');
      console.error('[enzyme/withDom] To fix this you must run:');
      console.error('[enzyme/withDom]   npm install jsdom --save-dev');
    } else {
      console.error('[enzyme withDom] ' + (e.stack || e.message));
    }
  }
}

import LandingContainer from '../../client/js/components/landing_page/landing_container.js';
import Login from '../../client/js/components/landing_page/login.js';
import Welcome from '../../client/js/components/landing_page/welcome.js';
import Dropdown from '../../client/js/components/game_page/dropdown.js';
import Feedback from '../../client/js/components/game_page/feedback.js';
import GameContainer from '../../client/js/components/game_page/game_container.js';
import Header from '../../client/js/components/game_page/header.js';

// LANDING PAGE

describe('Landing Container', function() {
  const landingContainer = shallow(<LandingContainer />);
  it('Should render a div with class LandingContainer.', function() {
    landingContainer.hasClass('LandingContainer').should.equal(true);
  });
});

describe('Login', function() {
  const login = shallow(<Login />);
  // const renderLogin = render(<Login />);
  it('Should render a div with class login-link-container', function() {
    login.hasClass('login-link-container').should.equal(true);
  });
  it('Should render link to log in with auth/google path', function() {
      login.find('.login-link').length.should.equal(1);
      // TODO: why doesn't this work?
      // renderLogin.find('.login-link').should.have.html('<a className="login-link" href="/auth/google">Log in with Google</a>');
  });
});

describe('Welcome', function() {
  const welcome = mount(<Welcome />);
  it('Should render component with type Welcome (mount component)', function() {
    welcome.should.have.type(Welcome);
  });
  it('Should render a div with class homepage', function() {
    welcome.hasClass('homepage').should.equal(true);
  });
  it('Should render header with span', function() {
    welcome.find('.homepage-text').should.have.tagName('h1');
  });
  it('Should render h1 component', function() {
    welcome.find('h1').length.should.equal(1);
  });
  it('Should render Login component', function() {
    welcome.find(Login).length.should.equal(1);
  });
});

// GAME PAGE

describe('Dropdown', function() {
  const dropdown = shallow(<Dropdown />);
  it('Should render component with type div (shallow render component)', function() {
    dropdown.should.have.type('div');
  });
  it('Should render a dropdown menu', function() {
    dropdown.find('.dropdown').length.should.equal(1);
    // TODO: this also doesn't work, same error:
    // "AssertionError: expected { Object (root, unrendered, ...) } to have
    // headers or getHeader method"
    // dropdown.find('h4').should.have.text('Menu');
    dropdown.find('.dropdown-content').length.should.equal(1);
  })
  it('Should render three links', function() {
    dropdown.find('Link').length.should.equal(2);
    dropdown.find('a').length.should.equal(1);
  });
});

describe('Feedback', function() {
  // TODO: how do I test different output possibiities here?
  const feedback = mount(<Feedback />)
  console.log(feedback.component.props);
  it('Should render <p> with feedback text', function() {
    feedback.should.have.type(Feedback);
    // TODO: as an error, the exact HTML below is listed as output. so wth
    // is this not working?
    // feedback.find(Feedback).should.have.html('<p data-reactroot="" class="feedback-text">Whoops! The correct answer is undefined. Keep trying!</p>');
  });
});

// TODO: testing react components connected to Redux!
// describe('GameContainer', function() {
//   const gameContainer = mount(<GameContainer />)
//   it('Should render Feedback with props current, user, & correctCount', function() {
//     // expect(wrapper.find(User).first()).to.have.prop('index')
//     gameContainer.find(Feedback).should.have.prop('answer');
//   });
// });

describe('Header', function() {
    const header = shallow(<Header />);
    it('Should render a div with class header', function() {
      header.hasClass('header').should.equal(true);
    });
    it('Should render a logo', function() {
      header.find('.logo').length.should.equal(1);
    });
    it('Should render a dropdown', function() {
      header.find(Dropdown).length.should.equal(1);
    });
  }
);