import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import devConnectorLogo from '../../img/logo.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <Link to="/profiles" className="item">
        Developers
      </Link>
      <Link to="/posts" className="item">
        Posts
      </Link>

      <div className="right item">
        <Link to="/dashboard">
          <span className="hide-sm">Dashboard</span>
        </Link>
        <i className="fas fa-user item" />{' '}
        <Link to="/" onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Log out</span>
        </Link>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link className="item" to="/profiles">
        Developers
      </Link>
      <div className="right item">
        <Link to="/login" className="ui inverted button">
          Log in
        </Link>
        <Link to="/register" className="ui inverted button">
          Sign Up
        </Link>
      </div>
    </Fragment>
  );

  return (
    <nav className="ui inverted vertical center aligned segment">
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu">
          <div className="header item">
            <img
              className="ui small image"
              alt="devconnector"
              src={devConnectorLogo}
              style={{ width: '100px' }}
            />
          </div>

          <Link to="/" className=" item">
            Home
          </Link>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
