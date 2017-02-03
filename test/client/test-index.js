import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
const should = chai.should();
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

import Header from '../../client/js/components/game_page/header.js';
import Dropdown from '../../client/js/components/game_page/dropdown.js';

// LANDING PAGE

describe('Landing Container', function() {
  const landingContainer = shallow(<LandingContainer />);
  it('Should render a div with class LandingContainer.', function() {
    landingContainer.hasClass('LandingContainer').should.equal(true);
  });
});

describe('Login', function() {
  const login = shallow(<Login />);
  const wrapper = mount(<Login />)
  it('Should render a div with class login-link-container', function() {
    login.hasClass('login-link-container').should.equal(true);
  });
  it('Should render link to log in with auth/google path', function() {
      console.log(wrapper);
      login.find('.login-link').length.should.equal(1);
      // wrapper.find('.login-link').should.have.html('<a className="login-link" href="/auth/google">Log in with Google</a>')
  });
});

describe('Welcome', function() {

})

// GAME PAGE

describe('Header', function() {
    const header = shallow(<Header />);
    it('Should render a div with class header.', function() {
      header.hasClass('header').should.equal(true);
    });
    it('Should render a logo.', function() {
      header.find('.logo').length.should.equal(1);
    });
    it('Should render a dropdown.', function() {
      header.find(Dropdown).length.should.equal(1);
    });
  }
);
