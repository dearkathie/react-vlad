/* global fetch */
import React, { Component, PropTypes } from 'react';
import './App.css';
import MessageList from './MessageList';

let getUrlWithOffset;
let resultLength;
let offset = null;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.loadMessagesFromServer();
    setInterval(this.loadMessagesFromServer.bind(this), this.props.pollInterval);
  }

  createURL() {
    if (offset === null) {
      getUrlWithOffset = this.props.url;
    } else {
      getUrlWithOffset = `${this.props.url}?offset=${offset}`;
    }
  }

  loadMessagesFromServer() {
    this.createURL();
    fetch(getUrlWithOffset)
    .then((response) => {
      response.json().then((data) => {
        for (let i = 0; i < data.result.length; i++) {
          const updatedMessages = this.state.data.concat(data.result);
          this.setState({ data: updatedMessages });
          resultLength = data.result[data.result.length - 1];
        }
        if (resultLength !== undefined) {
          offset = resultLength.update_id + 1;
        }
      });
    }
            );
  }

  render() {
    return (
      <div className="container">
        <h1>SPBTV Bot</h1>
        <MessageList data={this.state.data} />
      </div>
    );
  }
}

App.propTypes = {
  pollInterval: PropTypes.number,
  url: PropTypes.string,
};

export default App;
