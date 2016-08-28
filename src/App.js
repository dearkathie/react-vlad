import React, {Component} from 'react';
import './App.css';
import MessageList from './MessageList';

class App extends Component {

  constructor(props) {
      super(props);
        this.state = {
          data: [],
        };
      };
      loadMessagesFromServer(){
          var _this = this;
          fetch(this.props.url)
            .then(
              function(response) {
                response.json().then(function(data){
                   _this.setState({data: data.result});
                });
              }
            )
            .catch(function(err) {
              console.log('Fetch Error', err);
            });
        }
        componentDidMount() {
            this.loadMessagesFromServer();
            setInterval(this.loadMessagesFromServer.bind(this), this.props.pollInterval);
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

export default App;
