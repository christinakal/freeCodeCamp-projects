import React, { useState } from "react";
import "./App.css";

// Components
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
  const [data, setData] = useState([
    "Q",
    "W",
    "E",
    "A",
    "S",
    "D",
    "Z",
    "X",
    "C",
  ]);
  const [display, setDisplay] = useState(["Press a key to play the drums!"]);

  const handleClick = (name) => {
    setDisplay(name);
  };

  return (
    <div className="App">
      <Display display={display} />
      {data.map((button) => (
        <Button
          name={button}
          key={button}
          display={display}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default App;
