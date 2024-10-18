import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [name, setName] = useState('Himasha');

  //change the document name with useEffect
  useEffect (() => {
    document.title = `Celebrate ${name}`;
  })

  return (
    <section>
      <h1>Congratulations {name} !</h1>
      <button onClick={()=> setName("Nethmini")}>
        Winner
      </button>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
