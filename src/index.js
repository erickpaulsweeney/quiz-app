import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Quiz from "./components/Quiz";

let reactRoot = ReactDOM.createRoot(document.getElementById('root')); 

reactRoot.render(<Quiz />)