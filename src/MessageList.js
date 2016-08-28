import React, {Component} from 'react';
import Author from './Author';
import Message from './Message';

class MessageList extends Component {
  render() {
    var messageNodes = this.props.data.map(function(data) {
      return (
        <div key={data.update_id}>
          <Author>
            {data.message.from}
          </Author>
          <Message>
            {data.message.text}
          </Message>
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
