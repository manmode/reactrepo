import react from "react"
import ReactDOM from "react-dom/client";

import App1 from './App1/App1';

var root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<App1 />);

var root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<App1 />);