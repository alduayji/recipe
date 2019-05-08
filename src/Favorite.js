import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';






const Favorite =({rec}) => {
  
 if(!rec){
   return (<div>
 <p>You have not added anything yet..!</p>
   <Router>
   <Link to="/">  
   <button>Back Home</button>
   </Link>
 </Router>

   </div>)
  
 }

  
    return (
     <div className="card" key={rec.index}>
                        <h2> {rec.recipe.label} </h2>
                        <img src= {rec.recipe.image}alt="image"/>    
                        <ul>
                                <li> 
                            {rec.recipe.ingredientLines.map(ing =>{
                                return ing 
                            })} 
                            </li>
                        </ul> 
                        <Router>
                          <Link exact to="/">  
                          <button>Back Home</button>
                          </Link>
                        </Router>
      </div>
    );
  
    }
  export default Favorite;