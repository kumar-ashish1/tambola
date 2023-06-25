import * as React from "react";
import { Component } from "react";
import Config from "./Config";

interface EnterNameProps {
  socket: any;
}

interface EnterNameState {
  isEmpty: boolean;
  name: string;
  emp_code:string;
  submitted: boolean;
}

class EnterName extends Component<EnterNameProps, EnterNameState> {
  constructor(props: EnterNameProps) {
    super(props); 
    const queryParams = new URLSearchParams(window.location.search);
    let uname = queryParams.get('name') as string;
    let uemp_code = queryParams.get('emp_id') as string;

    let randomId = '_' + Math.random().toString(36).substr(2, 9);

    if(uname == undefined)
         uname = "guest" + randomId;

    if(uemp_code == undefined)
         uemp_code = "emp" + randomId

    this.state = { isEmpty: false, name: uname, submitted: true, emp_code:uemp_code};
  }

  handleChange = (event: any) => {
    const { value } = event.target;
    if (value !== "") {
      this.setState({ isEmpty: false, name: value });
    } else {
      this.setState({ isEmpty: true, name: value });
    }
  };

  handleKeyPress = (event: any) => {
    const { value } = event.target;
    if (event.key === "Enter" && value !== "") {
      console.log("enter press here!");
      this.setState({
        submitted: true,
      });
    }
  };

  handleSubmit = (event: any) => {
    this.setState({
      submitted: true,
    });
    event.preventDefault();
  };

  render() {
    if (!this.state.submitted) {
      let myStyles: React.CSSProperties = {};
      if (!this.state.isEmpty) {
        myStyles = { visibility: "visible" };
      } else {
        myStyles = { visibility: "hidden" };
      }
      let submitButton = (
        <div style={myStyles}>
          <button onClick={this.handleSubmit}>OK</button>
        </div>
      )

      return (
        <div className="enter-name-container">
          <div className="enter-name">
            <p className="enter-name-question">Hi. What's your name?</p>
            <input
              id="enter-name"
              type="text"
              value={this.state.name}
              placeholder="Type your answer here..."
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              spellCheck="false"
              autoFocus
            />
            <br />
            <br />
            <br />
            {submitButton}
          </div>
        </div>
      );
    } else {
      return <Config socket={this.props.socket} name={this.state.name} emp_code={this.state.emp_code} />;
    }
  }
}

export default EnterName;
