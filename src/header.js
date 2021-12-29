import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <header>
        <h1>{this.props.children}</h1>
      </header>
    );
  }
}

export default Header;