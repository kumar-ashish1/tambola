import React from "react";
import { Component } from "react";
import "../css/App.css";
import io from "socket.io-client";
import EnterName from "./EnterName";

interface AppState {
  socket: any;
}

interface AppProps {}

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    
    this.state = {
       // socket:io(),
      socket: io('/', { upgrade: false, transports: ['websocket'] }),
    };
  }

  render() {
    return (
      <>
        <img className="logo" src="../logo.png" alt="" />
        <div className="App">
          <EnterName socket={this.state.socket} />
        </div>
      </>
    );
  }
}

export default App;
