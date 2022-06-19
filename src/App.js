import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Comp1/Comp1';
import About from './components/Comp2/Comp2';
import Contact from './components/Comp3/Comp3';
import './App.css';
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <nav className="navbar navbar-expand-lg navbar-light bg-dark">
             <ul className="navbar-nav mr-auto">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            </nav>
           <Routes>
                 <Route exact path='/' element={<Home/>}></Route>
                 <Route exact path='/about' element={<About/>}></Route>
                 <Route exact path='/contact' element={<Contact/>}></Route>
          </Routes>
          </div>
          
       </Router>
   );
  }
}
 
export default App;