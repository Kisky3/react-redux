import React, { Component } from 'react'
import './index.css';

export default class Count extends Component {
  render() {
    return (
      <div>
          <h2>Count Function</h2>
          <select name="num" id="num" ref={ c => this.selectNumber = c} className="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
          <button className="button"> + </button>
          <button className="button"> - </button>
          <button className="button"> add when odd </button>
          <button className="button"> add when async </button>
      </div>
    )
  }
}
