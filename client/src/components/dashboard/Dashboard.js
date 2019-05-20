import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { GetCurrentProfile } from '../../actions/profile';

const Dashboard = ({ GetCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
	useEffect(() => {
		GetCurrentProfile();
	}, [GetCurrentProfile]);

	return loading && profile === null ? (
		<Spinner />
	) : (
		<Fragment>
			<h1 className="large text-primary">Dashboard</h1>
			<p className="lead">
				<i className="fas fa-user" />
				Welcome {user && user.name}
			</p>
			{profile !== null ? (
				<Fragment>has</Fragment>
			) : (
				<Fragment>
					<p>You have not yet setup a profile, please add some info</p>
					<Link to="/create-profile" className="btn btn-primary my-1 ">
						Create Profile
					</Link>
				</Fragment>
			)}
		</Fragment>
	);
};

Dashboard.propTypes = {
	GetCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(
	mapStateToProps,
	{ GetCurrentProfile }
)(Dashboard);
