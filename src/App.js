/* global fetch */
import React, { Component, PropTypes } from 'react';
import './App.css';
import MessageList from './MessageList';

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
  loadMessagesFromServer() {
    fetch(this.props.url)
            .then((response) => {
              response.json().then((data) => {
                this.setState({ data: data.result });
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
