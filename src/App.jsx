import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };
      this.onSubmit = this.onSubmit.bind(this)
  }
onSubmit(event){
  event.preventDefault()
  let newList = [...this.state.list, this.state.list]
  this.setState({
    list: newList,
    text: ""
  })
}
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="text" id="text" value = {this.state.text} onChange = {(event) => this.setState ({
            text: event.target.value,
          })}>
            <button type='submit'>Submit</button>
          </input>
        </form>
        <ul>
          {this.state.list.map((element, index) => {
            return <li key = {index}>
              {element}
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
