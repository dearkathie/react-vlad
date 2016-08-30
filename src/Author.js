import React, { PropTypes } from 'react';
import './Author.css';

const Author = (props) => (
  <div>
    <div className="from">
      From:
    </div>
    <div className="name">
      {`${props.first_name} ${props.last_name}`}
    </div>
  </div>
);
Author.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
};

export default Author;
