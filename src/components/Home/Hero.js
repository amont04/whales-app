import React, { Component } from 'react';
import './Hero.css';
import Logo from '../../assets/whales-logo.png'

class Hero extends Component {
  render() {
    return (
      <div class="hero">
      <div class="hero-content">
      <img src={Logo} />
      </div>
      </div>
    );
  }
}

export default Hero;