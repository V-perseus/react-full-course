import React, {useState} from "react";
import './App.css';
import items from './data';
import Menu from './components/Menu';
import Categories from './components/Categories'
// import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import EventBind from "./components/EventBind";
// import Form from "./components/Form";
// import FragmentDemo from "./components/FragmentDemo";

// import FunctionClick from "./components/FunctionClick";

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    const newItems = items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  }
  return (
    // <div className="App">
    //   {/* <FunctionClick /> */}
    //   {/* <EventBind /> */}
    //   {/* <FragmentDemo /> */}
    //   {/* <Form /> */}
    // </div>
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/about" exact component={About} />
    //   </Switch>
    // </Router>

    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
