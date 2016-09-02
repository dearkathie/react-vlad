/* global fetch */
import React, { Component, PropTypes } from 'react';
import './App.css';
import MessageList from './MessageList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      getUrlWithOffset: this.props.url,
      resultLength: null,
      offset: null,
    };
  }

  componentDidMount() {
    this.loadMessagesFromServer();
    setInterval(this.loadMessagesFromServer.bind(this), this.props.pollInterval);
  }

  createURL() {
    if (this.state.offset === null) {
      this.state.getUrlWithOffset = this.props.url;
    } else {
      this.state.getUrlWithOffset = `${this.props.url}?offset=${this.state.offset}`;
    }
  }

  loadMessagesFromServer() {
    this.createURL();
    fetch(this.state.getUrlWithOffset)
    .then((response) => {
      response.json().then((data) => {
        for (let i = 0; i < data.result.length; i++) {
          this.state.resultLength = data.result[data.result.length - 1];
          const updatedMessages = this.state.data.concat(data.result).reverse();
          this.setState({ data: updatedMessages });
        }
        if (this.state.resultLength !== undefined) {
          this.state.offset = this.state.resultLength.update_id + 1;
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
