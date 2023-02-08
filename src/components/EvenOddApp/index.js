import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickButton = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    let type = 'Even'

    type = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="countEvenOrOdd">Count is {type}</p>
          <button className="button" type="button" onClick={this.onClickButton}>
            Increment
          </button>
          <p className="lastPara">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
