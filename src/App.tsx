import React from "react";
import "./App.css";
import TicTac from "./components/TicTac";

interface State {
  tictac: any;
  chance: number;
}

class App extends React.Component<{}, State> {
  state: State = {
    tictac: Array(9).fill(null),
    chance: 0
  };
  baseState: State;
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.baseState = this.state;
  }

  handleClick(i: number) {
    const tictac = this.state.tictac.slice();
    tictac[i] = this.state.chance === 0 ? "O" : "X";
    this.setState(() => {
      return { tictac: tictac };
    });
    if (this.state.chance === 0) {
      this.setState(() => {
        return {
          chance: 1
        };
      });
    } else {
      this.setState(() => {
        return {
          chance: 0
        };
      });
    }
  }

  renderTicTac(i: number) {
    return (
      <TicTac
        value={this.state.tictac[i]}
        updateTick={() => this.handleClick(i)}
      ></TicTac>
    );
  }

  declareWinner(): string | null {
    let winner = null;
    const winCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    winCases.forEach((cases, index) => {
      const [a, b, c] = cases;
      const tictac = this.state.tictac;

      if (
        (tictac[a] === "X" && tictac[b] === "X" && tictac[c] === "X") ||
        (tictac[a] === "O" && tictac[b] === "O" && tictac[c] === "O")
      ) {
        console.log(tictac[a]);
        winner = tictac[a];
      } else {
      }
    });

    return winner;
  }

  reStartGame = () => {
    this.setState(this.baseState);

    window.location.href = "";
  };

  render() {
    const winner = this.declareWinner();
    console.log(winner);
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Tic Tac Toe</h3>

        {winner ? (
          <div className="modal">
            <div className="winner-modal">
              {winner != null ? winner + " is a winner" : " "}
              <br />
              <button
                style={{ display: "inline-block" }}
                onClick={this.reStartGame}
              >
                Reset Game
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <p>{this.state.chance === 0 ? "O" : "X"}'s turn.</p>

        <div className="container">
          {this.renderTicTac(0)}
          {this.renderTicTac(1)}
          {this.renderTicTac(2)}
          {this.renderTicTac(3)}
          {this.renderTicTac(4)}
          {this.renderTicTac(5)}
          {this.renderTicTac(6)}
          {this.renderTicTac(7)}
          {this.renderTicTac(8)}
        </div>
      </div>
    );
  }
}

export default App;
