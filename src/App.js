import React from 'react';
import Favorite from './Favorite'
import Recipe from "./Recipe";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from "react-router-dom";




import './App.css';


// https://api.edamam.com/search?q=chicken&app_id=460115a9&app_key=ae374b01d6a08946b4901cf789bac764&health=peanut-free
class App extends React.Component {
  
 
  render() { 
  return (
    <div className="App">
         <Router>
                <Link to="/favorite">
                <button>Shwo Favorites</button>
                </Link>
            </Router>
 
      <Recipe/>

    <Router>
     <Switch>
      <Route exact path="/" Component={Recipe}/>

      <Route  path="/favorite" Component={Favorite}/>
      </Switch>
    </Router>
    </div> 
  );
}
}

export default App;
