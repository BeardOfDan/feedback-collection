import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null: // pending
        return undefined;
      case false: // not logged in
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        );
      default: // logged in
        return (
          <li><a>Logout</a></li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Feedback Collector
          </a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
};

const mapStateToProps = (state) => {
  return { 'auth': state.auth };
};

export default connect(mapStateToProps)(Header);
