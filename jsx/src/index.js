// import react app
import react from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// get root dom element
var rootElement = document.getElementById('root');

// create root element
var root = ReactDOM.createRoot(rootElement);

root.render(<App />);