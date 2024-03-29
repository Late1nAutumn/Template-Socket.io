import React from "react";
import ReactDOM from "react-dom";
import * as io from 'socket.io-client';
var socket = io('http://localhost:3001');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false
    };
  }
  socketTest(){
    socket.emit('test',{hi:"it's me"});
  }
  componentDidMount() {
    this.setState({
      load: true
    });
  }
  render() {
    return (
      <div id = "content" >
        {this.state.load ?
        <div>
          Hello World
          <button onClick={this.socketTest}>socket gogo</button>
        </div> : <div></div>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
