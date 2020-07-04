import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import { TasksList, TasksInsert, TasksUpdate } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/tasks/list" exact component={TasksList} />
        <Route path="/tasks/create" exact component={TasksInsert} />
        <Route path="/tasks/update/:id" exact component={TasksUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
