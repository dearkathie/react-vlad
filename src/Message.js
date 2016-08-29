import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <div>
        <div className="message">
          Message:
        </div>
        <div className="text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Message;
