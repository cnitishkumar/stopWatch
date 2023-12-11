import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  startTimer = () => {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        timeInSeconds: prevState.timeInSeconds + 1,
      }))
    }, 1000)
  }

  onStart = () => {
    this.startTimer()
    this.setState({isTimerRunning: true})
  }

  onStop = () => {
    clearInterval(this.timerID)
    this.setState({isTimerRunning: false})
  }

  onReset = () => {
    clearInterval(this.timerID)
    this.setState({timeInSeconds: 0})
    this.setState({isTimerRunning: false})
  }

  getFormatedTime = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    const formatedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const formatedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${formatedMinutes}:${formatedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="stopwatch-header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-logo"
            />
            <h2 className="timer-heading">Timer</h2>
          </div>
          <h2 className="time">{this.getFormatedTime()}</h2>

          <div className="buttons-container">
            <button
              className="button button-1"
              type="button"
              disabled={isTimerRunning}
              onClick={this.onStart}
            >
              Start
            </button>
            <button
              className="button button-2"
              type="button"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              className="button button-3"
              type="button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
