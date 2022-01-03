

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './todo.js';
import Regist from './regist.js';
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
      <Route path="regist" element={<Regist />}>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();