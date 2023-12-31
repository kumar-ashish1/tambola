import * as React from "react";
import { Component } from "react";
import { Award } from "./Config";
import GoneNumbers from "./GoneNumbers";

interface WinningButtonsProps {
  awards: Award[];
  winCallBack: (callWinType: string) => void;
}

interface WinningButtonsState {}

class WinningButtons extends Component<
  WinningButtonsProps,
  WinningButtonsState
> {
  awardButtons: JSX.Element[];
  constructor(props: WinningButtonsProps) {
    super(props);
    this.awardButtons = [];

    for (let i = 1; i < this.props.awards.length; ++i) {
      this.awardButtons.push(
        <button
          key={i}
          onClick={() => {
           // console.log(this.props.awards[i].nameAward)
            this.props.winCallBack(this.props.awards[i].nameAward);
          }}
        >
          {this.props.awards[i].nameAward}
        </button>
      );
    }
  }

  render() {
    return <div className={"winning-buttons"}>{this.awardButtons}</div>;
  }
}

export default WinningButtons;
