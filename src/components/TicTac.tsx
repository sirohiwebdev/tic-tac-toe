import React, { Component } from "react";
import "./tictac.css";

interface IProps {
  updateTick(): void;
  value: string | null;
}

interface IState {
  tic: boolean;
}

class TicTac extends Component<IProps, IState> {
  state: IState = {
    tic: false
  };

  baseState: IState;

  constructor(props: IProps) {
    super(props);
    this.baseState = this.state;
  }

  doClick = () => {
    if (this.state.tic) {
      return;
    } else {
      this.props.updateTick();
      this.setState({
        tic: true
      });
    }
  };

  render() {
    return (
      <div className="tictac" onClick={this.doClick}>
        {this.props.value}
      </div>
    );
  }
}
export default TicTac;
