import React from 'react';

import { Link } from "react-router-dom";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${title}`);
    
    const res = await req.json();
    this.setState({ activeRecipe: res.meals[0] });
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container" style={{padding: 20 + 'px'}}>
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.strMealThumb} alt={recipe.strMeal}/>
            <h3 className="active-recipe__title">{ recipe.strMeal }</h3>
            <h4 className="active-recipe__publisher">
            Instructions: <span>{ recipe.strInstructions }</span>
            </h4>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;