import React, {Component} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import EventBind from "./components/EventBind";
import Form from "./components/Form";
import FragmentDemo from "./components/FragmentDemo";

// import FunctionClick from "./components/FunctionClick";

function App() {
  return (
    // <div className="App">
    //   {/* <FunctionClick /> */}
    //   {/* <EventBind /> */}
    //   {/* <FragmentDemo /> */}
    //   {/* <Form /> */}
    // </div>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
