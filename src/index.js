<<<<<<< Updated upstream
import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const initialState = {
  message: "Hi",
};

//define reducer
function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY ! I JUST SAID ${state.message}`,
      };
    case "whisper":
      return {
        message: `excuse me! ${state.message}`,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Message : {state.message}</p>
      {/* dispatch the reducer */}
      <button onClick={() => dispatch({ type: "yell" })}> GO</button>
      <button onClick={() => dispatch({ type: "whisper" })}> STOP</button>
    </>
=======
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("");

  const submit = (E) => {
    E.preventDefault();
    alert(`${sound} sounds like ${color}`);
    //reseting
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
>>>>>>> Stashed changes
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
