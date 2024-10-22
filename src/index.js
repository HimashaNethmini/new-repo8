import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useInput } from "./userInput"

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (E) => {
    E.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    //reseting
    resetTitle()
    resetColor()
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="sound...."
      />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
