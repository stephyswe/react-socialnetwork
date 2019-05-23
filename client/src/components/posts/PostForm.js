import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  return (
    <form
      className="ui form"
      onSubmit={e => {
        e.preventDefault();
        addPost({ text });
        setText('');
      }}
    >
      <textarea
        className="four wide column"
        name="text"
        cols="10"
        rows="5"
        placeholder="Create a post"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <br />
      <input type="submit" className="ui button input" value="Submit" />
    </form>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addPost }
)(PostForm);
