import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => (
  <div className="ui piled segment">
    <p className="">{text}</p>
    <h5>Author</h5>{' '}
    <p>
      <Link to={`/profile/${user}`}>
        <img className="post-avatar" src={avatar} alt="" />
        <span className="m-2">{name}</span>
      </Link>
      <span className="post-date">
        {' '}
        - Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
      </span>
    </p>
    {showActions && (
      <Fragment>
        <button
          onClick={e => addLike(_id)}
          type="button"
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-up" />{' '}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          onClick={e => removeLike(_id)}
          type="button"
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-down" />
        </button>
        <Link to={`/posts/${_id}`} className="btn btn-primary">
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}{' '}
          {comments.length > 1 ? <span>Comments</span> : <span>Comment</span>}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={e => deletePost(_id)}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times" />
          </button>
        )}
      </Fragment>
    )}
  </div>
);

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
