import React, { Component } from 'react';
import './App.css';
import Recipes from "./components/Recipes";


class App extends Component {
  state = {
    recipes: [],
    isSubmitted:  false
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeName}`);
    const data = await api_call.json();
    this.setState({ recipes: data });
    console.log(api_call);
    this.setState({isSubmitted: true});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> FOODIE Recipe Search</h1>
        </header>
        <form onSubmit={this.getRecipe.bind(this)} style={{ marginBottom:"2rem" }}>
          <input className="form__input" type="text" name="recipeName" />
          <button className="form__button">Search</button>
        </form>
        {this.state.isSubmitted && <Recipes recipes={this.state.recipes.meals} />}
      </div>
    );
  }
}

export default App;