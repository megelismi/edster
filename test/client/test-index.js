import React from 'react';
import chai from 'chai';
import { mount, shallow } from 'enzyme';
const should = chai.should();

import LandingContainer from '../../client/js/components/landing_page/landing_container.js';
import Login from '../../client/js/components/landing_page/login.js';
import Welcome from '../../client/js/components/landing_page/welcome.js';

import Header from '../../client/js/components/game_page/header.js';
import Dropdown from '../../client/js/components/game_page/dropdown.js';

// LANDING PAGE

describe('Landing Container', () => {
  const landingContainer = shallow(<LandingContainer />);
  it('Should render a div with class LandingContainer.', () => {
    landingContainer.hasClass('LandingContainer').should.equal(true);
  });
});

describe('Login', () => {
  const login = shallow(<Login />);
  it('Should render a div with class login-link-container', () => {
    login.hasClass('login-link-container').should.equal(true);
  });
  it('Should render link to log in with auth/google path', () => {
      login.find('.login-link').length.should.equal(1);
      login.find('/auth/google').length.should.equal(1);
  });
});

// GAME PAGE

describe('Header', () => {
    const header = shallow(<Header />);
    it('Should render a div with class header.', () =>{
      header.hasClass('header').should.equal(true);
    });
    it('Should render a logo.', () => {
      header.find('.logo').length.should.equal(1);
    });
    it('Should render a dropdown.', () => {
      header.find(Dropdown).length.should.equal(1);
    });
  }
);
