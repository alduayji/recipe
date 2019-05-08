import React from "react";
import './App.css';

const Recpies = ({res, selectedRec}) =>{
return(
    <div className="card" key={res.index}>
                        <h2> {res.recipe.label} </h2>
                        <img src= {res.recipe.image}alt="image"/>    
                        <ul>
                                <li> 
                            {res.recipe.ingredientLines.map(ing =>{
                                return ing 
                            })} 
                            </li>
                        </ul> 
                    <form >
                    
                    <button onClick={(e)=> {e.preventDefault(); selectedRec(res)}}
                     >add to fav</button>
    
                    </form>
              </div>
)
}

export default Recpies;