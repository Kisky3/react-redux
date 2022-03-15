import React, { Component } from 'react'
import './index.css';

export default class Count extends Component {
    state = {count: 0}

    increment = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        this.setState({count: count + value*1});
    }
    decrement = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        this.setState({count: count - value*1});
    }
    incrementWhenOdd = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        if(count % 2 !== 0) {
            this.setState({count: count + value*1});
        }
    }
    incrementWhenAsync = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        setTimeout(() => {
            this.setState({count: count + value*1});
        }, 500);
    }
  render() {
    return (
      <div>
          <h2>Count Function</h2>
          <h3>Count: {this.state.count}</h3>
          <select name="num" id="num" ref={ c => this.selectNumber = c} className="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
          <button className="button" onClick={this.increment}> + </button>
          <button className="button" onClick={this.decrement}> - </button>
          <button className="button" onClick={this.incrementWhenOdd}> add when odd </button>
          <button className="button" onClick={this.incrementWhenAsync}> add when async </button>
      </div>
    )
  }
}
