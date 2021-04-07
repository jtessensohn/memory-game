import React, { Component } from 'react'
import './MemoryCard.css';

export default class MemoryCard extends Component {
  
  render() {
    let innerClass = "MemoryCard_inner "
    if (this.props.isFlipped) {
      innerClass = innerClass + "flipped"
    }
    return (
      <div>
        <div className="MemoryCard" onClick={this.props.pickCard} >
          <div className={innerClass}>
            <div className="MemoryCard_back">
              <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" alt="white wrench" />
            </div>
            <div className="MemoryCard_front">
              {this.props.symbol}
            </div>
          </div>
        </div>
      </div>
    )
  }
}