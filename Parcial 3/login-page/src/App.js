import 'normalize.css/normalize.css';
import './Styles/styles.scss';
import  React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogPage from './Views/LogIn.js';
import Home from './Views/Home.js';

function App() {

  return (
    <Router>
          
          <Switch>
           
           <Route path="/" exact component = {LogPage}/>
           <Route path="/home" component = {Home}/>
          
          </Switch>

    </Router>
  );
}

export default App;
