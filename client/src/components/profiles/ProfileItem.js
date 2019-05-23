import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <Link className="card w3-remove-underline" to={`/profile/${_id}`}>
      <div className="ui tiny image w3-centered">
        <img className="avatar-image round-img" alt="avatar" src={avatar} />
      </div>
      <div className="content">
        <p href="#!" className="header">
          {name}
        </p>
        <div className="description">
          <p>
            {name} is a {status} {company && <span> at {company}</span>}. Living
            in {location && <span>{location}</span>}
          </p>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="text-primary">
              <i className="fas fa-check" /> {skill}
            </li>
          ))}
        </div>
      </div>
    </Link>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
