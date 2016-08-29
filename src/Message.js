import React, { PropTypes } from 'react';
import './Message.css';

const Message = (props) => (
  <div>
    <div className="message">
      Message:
    </div>
    <div className="text">
      {props.text}
    </div>
  </div>
);

Message.propTypes = {
  text: PropTypes.string,
};

export default Message;
