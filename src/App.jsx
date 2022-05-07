import React from "react";
import './App.css'


export default class App extends React.Component {
  state = {
    count: 0,
    Counting: false
  }

  componentDidMount() {
    console.log("BROWSER LAUNCHED");
    this.saveCount = localStorage.getItem("saveTime")
    if (this.saveCount) {
      this.setState({
        count: this.count = +this.saveCount
      })
    }
  }

  componentDidUpdate() {
    console.log("BROWSER UPDATED");
    localStorage.setItem("saveTime", this.state.count)
  }

  

  timerStart() {
    this.setState({
      Counting: true
    });

    this.CountingStart = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  };

  timerStop() {
    this.setState({
      Counting: false
    });

    clearInterval(this.CountingStart)
  };

  timerReset() {
    this.setState({
      Counting: false
    });

    this.setState({
      count: this.count = 0
    });

    clearInterval(this.CountingStart)
  }




  render() {
    return (
      <div className="App">
        <h1>REACT TIMER</h1>
        <p>{this.state.count}</p>

        {
          this.state.Counting ? (
            <button onClick={(e) => this.timerStop(e)} className="stop">STOP</button>
          ) : (
            <button onClick={(e) => this.timerStart()} className="start">START</button>
          )
        }

        <button className="reset" onClick={(e) => this.timerReset(e)}>RESET</button>

      </div>
    );
  }
}
