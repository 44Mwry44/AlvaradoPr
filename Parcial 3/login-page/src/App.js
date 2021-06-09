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
import Signin from './Views/Signin';

function App() {

  return (
    <Router>
          
          <Switch>
           
           <Route path="/" exact component = {LogPage} />
           <Route path="/home" component = {Home} />
           <Route path="/signin" component = {Signin} />
          
          </Switch>

    </Router>
  );
}

export default App;
