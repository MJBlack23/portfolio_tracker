import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state = { displayMenu: false };
  }

  handleMenuToggle() {
    this.setState({ displayMenu: !this.state.displayMenu });
  }

  render() {
    const displayClass = this.state.displayMenu ? 'is-active' : '';
    return (
      <div className='navbar is-primary' style={{ borderBottomColor: '#eee', borderBottomWidth: 2, borderBottomStyle: 'solid'}}>
        <div className='container is-fluid is-mobile'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <i className="fas fa-folder-open fa-fw fa-3x" />
            </Link>
            {/* <div className="navbar-burger" data-target='navMenu' onClick={this.handleMenuToggle.bind(this)}>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
          </div>
          <div className={`navbar-menu ${displayClass}`} id='navMenu'>
            <div className='navbar-start'>
              {/* <Link className='navbar-item' to='/'>Home</Link>
              <Link className='navbar-item' to='/security'>Security</Link>
              <Link className='navbar-item' to='/security/new'>Add Security</Link> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
} 


export default Navbar;