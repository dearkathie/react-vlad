import React, { Component } from 'react';
import './Author.css';

class Author extends Component {
  render() {
    return (
      <div>
        <div className="from">
          From:
        </div>
        <div className="name">
          {this.props.first_name + ' ' + this.props.last_name}
        </div>
      </div>
    );
  }
}

export default Author;
