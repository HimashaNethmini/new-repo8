import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//useState
function App() {
  const [status, setStatus] = useState("Himasha");

  return (
    <div>
      <h1>The name is : {status}</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);