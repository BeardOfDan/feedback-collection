import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLogAction() { // Log in or out
    switch (this.props.auth) {
      case null: // pending
        return undefined;
      case false: // not logged in
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        );
      default: // logged in
        return (
          <li><a href="/api/logout">Logout</a></li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          {/*Logo Button */}
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Feedback Collector
          </Link>
          <ul className="right">
            {this.renderLogAction()}
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
