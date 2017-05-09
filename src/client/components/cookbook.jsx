import React, {Component} from "react";
import RecipeList from "./recipe-list";
import AddRecipeForm from './add-recipe-form';
import EditRecipeForm from './edit-recipe-form';

let recipeData = [
  {
    title: 'Tonkotsu Ramen',
    ingredients: ['Onions', 'Soy Sauce', 'Eggs', 'Pork', 'Sake', 'Mirin', 'Rice']
  },
  {
    title: 'Saag Paneer',
    ingredients: ['Spinach', 'Onion', 'Ginger', 'Garlic', 'Vegetable Oil', 'Milk', 'Lemon Juice', 'Garam Masala']
  }
];

class Cookbook extends Component {
  constructor(props) {
    super(props);
  }

  addRecipe(id) {
    this.props._addRecipe();
  }

  render(){
    return (
      <div>
        <RecipeList recipeData={recipeData}/>
        <button onClick={this.addRecipe.bind(this)}>Add Recipe</button>
      </div>
    )
  }
};

export default Cookbook;
