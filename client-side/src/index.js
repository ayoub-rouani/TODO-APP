import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./css/index.css";
import App from "./App";
import { TodoListConstextProvider } from "./store/TodoList-context";

ReactDOM.render(
  <TodoListConstextProvider>
    <Router>
      <App />
    </Router>
  </TodoListConstextProvider>,
  document.getElementById("root")
);
