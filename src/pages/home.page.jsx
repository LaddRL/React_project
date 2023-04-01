import React, { useState } from "react";

function HomePage(props) {
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
    </div>
  );
}

export default HomePage;
