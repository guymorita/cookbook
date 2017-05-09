import React, {Component} from "react";
import RecipeList from "./recipe-list";
import AddRecipeForm from './add-recipe-form';
import EditRecipeForm from './edit-recipe-form';

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
        <RecipeList/>
        <button onClick={this.addRecipe.bind(this)}>Add Recipe</button>
      </div>
    )
  }
};

export default Cookbook;
