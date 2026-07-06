import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Hello World </h1>

      <h2>Counter: {count}</h2>

      <button
        onClick={decrease}
        style={{
          padding: "10px 20px",
          margin: "10px",
          fontSize: "18px",
        }}
      >
        Decrease
      </button>

      <button
        onClick={increase}
        style={{
          padding: "10px 20px",
          margin: "10px",
          fontSize: "18px",
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default App;