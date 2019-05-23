import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const onSubmit = e => {
    e.preventDefault();
    addComment(postId, { text });
    setText('');
  };

  const [text, setText] = useState('');
  return (
    <form className="ui reply form">
      <div className="field">
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
      </div>
      <div
        onClick={e => onSubmit(e)}
        class="ui blue labeled submit icon button"
      >
        <i type="submit" className="icon edit" /> Add Reply
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addComment }
)(CommentForm);
