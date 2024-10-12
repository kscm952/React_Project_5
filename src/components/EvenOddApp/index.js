// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  OnIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state

    const statusType = count % 2 ? 'Odd' : 'Even'

    return (
      <div className="container">
        <div className="cardContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {statusType}</p>
          <button className="button" type="button" onClick={this.OnIncrement}>
            Increment
          </button>
          <p className="details">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
