import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("");

  const submit = (E) => {
    E.preventDefault();
    alert(`${sound} sounds like ${color}`);
    
    //resetting
    setSound("")
    setColor("")
  };

  return (
    <form onSubmit={submit}>
      <input
        value={sound}
        type="text"
        placeholder="sound...."
        onChange={(e) => setSound(e.target.value)}
      />
      <input value={color} type="color" 
        onChange={(e) => setColor(e.target.value)}/>
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
