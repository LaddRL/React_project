import React, { useState } from "react";
import "./App.css";
import FilmList from "./components/filmsList";

function App(props) {
  let [list, setList] = useState(["ready", "set", "GO"]);
  let [text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    setList([...list, text]);
    setText("");

    let newList = [...list, text];
    setList(newList);
    setText("");
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <FilmList />
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       list: ["ready", "set", "GO"],
//       text: "",
//     };
//       this.onSubmit = this.onSubmit.bind(this);
//   }
// onSubmit(event){
//   event.preventDefault()
//   let newList = [...this.state.list, this.state.list]
//   this.setState({
//     list: newList,
//     text: "",
//   })
// }

//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <form onSubmit={this.onSubmit}>
//           <input type="text" name="text" id="text" value = {this.state.text} onChange = {(event) => this.setState ({
//             text: event.target.value
//           })}>
//             <button type="submit">Submit</button>
//           </input>
//         </form>
//         <ul>
//           {this.state.list.map((element, index) => {
//             return <li key = {element + index}>
//               {element}
//             </li>
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

export default App;
