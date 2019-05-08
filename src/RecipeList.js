import React from "react";
import Recipes from "./Recipes";
import './App.css';



const RecipeList = ({recipe, selectedRec}) =>{

    const newRec = 
    recipe.map((res,index)=>{
        return(
            <Recipes key={index} selectedRec={selectedRec} res={res}/>
                
    )});
     return(  
         <div className="card">
            {newRec}
        </div> 
        
    )
             
}
export default RecipeList; 

//