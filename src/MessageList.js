import React, { Component } from 'react';
import Author from './Author';
import Message from './Message';

class MessageList extends Component {
  render() {
    const messageNodes = this.props.data.map(function (data) {
      return (
        <div key={data.update_id}>
          <Author first_name={data.message.from.first_name} last_name={data.message.from.last_name} />
          <Message text={data.message.text} />
        </div>
      );
    });
    return (
      <div>
        <div className="MessageList">
          {messageNodes}
        </div>
      </div>
    );
  }
}

export default MessageList;
