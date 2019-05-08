import React from "react";
import RecipeList from "./RecipeList";
import Favorite from './Favorite';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class Recipe extends React.Component {
   
    state = {
        recpies:[],
        rec: null
    };

    handelHeaalth = async (e) =>{ 
        e.preventDefault();  

            const api_key = "ae374b01d6a08946b4901cf789bac764";
            const api_id =  "460115a9&app";
            
            const search = e.target.elements.search.value;



        await fetch(`https://api.edamam.com/search?q=${search}&app_id=460115a9&app_key=ae374b01d6a08946b4901cf789bac764`)
            .then(function(response) {
            return response.json();
            })  
            //the arrow function binds this for you so you can access it within the function and it will still point to the component.
            .then(myJson => {
                this.setState({
                    recpies: myJson.hits.map(hit =>{
                        return hit
                    }), 
                })
            console.log(this.state.recpies); 

        })
       
    }

    
    selectedRec = recpie => {
          this.setState({rec: recpie});
      }
    
    componentDidUpdate(){
        console.log(this.state.rec);
        
    }

    render() {
        // map throghu the recipes and save them
     
        return(

                // put the recpes here strctured by bootstrap
        <div>
                   
             <form onSubmit={this.handelHeaalth.bind(this)}>

                <input type="text" name="search" placeholder="chicken..."/>
                
                <button>Search</button>

              </form>
              
             <RecipeList 
             recipe={this.state.recpies}
             selectedRec={this.selectedRec}
             /> 
            <Favorite rec={this.state.rec} />

            
         </div>

        )
    } 
}

export default Recipe;
