import React from 'react';
import 'normalize.css/normalize.css';
import Main from './Views/MainPage.js';
import UserData from './Components/UserData.js';
import About from './Views/About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar.js';

export default function App() {
  return (
      <Router>
        
        <UserData />

        <div className="App">
          
          <NavBar />
          
          <Switch>
           
           <Route path="/" exact component = {Main}/>
           <Route path="/about" component = {About}/>  
          
          </Switch>
        
        </div>
     
      </Router>
  );
}