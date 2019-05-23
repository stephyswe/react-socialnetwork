import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  deleteComment,
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
}) => (
  <div className="comment">
    <div class="avatar">
      <Link to={`/profile/${user}`}>
        <img className="img-rounded" src={avatar} alt="" />
      </Link>
    </div>
    <div className="content">
      <span className="author">{name}</span>
      <div class="metadata">
        <span class="date">
          <Moment format="YYYY/MM/DD">{date}</Moment>
        </span>
      </div>
      <div class="text">{text}</div>
      <div class="actions">
        <a href="#!" class="reply">
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={e => deleteComment(postId, _id)}
              type="button"
              className="reply ui button"
            >
              <i className="fas fa-times" />
            </button>
          )}
        </a>
      </div>
    </div>
  </div>
);

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
