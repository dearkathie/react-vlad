import React, { PropTypes } from 'react';
import Author from './Author';
import Message from './Message';

const MessageList = (props) => (
  <div className="MessageList">
      {
        props.data.map((data) =>
          <div key={data.update_id}>
            <Author
              first_name={data.message.from.first_name}
              last_name={data.message.from.last_name}
            />
            <Message text={data.message.text} />
          </div>
      )
    }
  </div>
  );

MessageList.propTypes = {
  data: PropTypes.array,
};

export default MessageList;
