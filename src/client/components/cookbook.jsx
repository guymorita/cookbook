import React, {Component} from "react";
import { connect } from 'react-redux';
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
    const { recipes } = this.props;
    return (
      <div>
        <RecipeList recipeData={recipes}/>
        <button onClick={this.addRecipe.bind(this)}>Add Recipe</button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  const { recipes } = state
  return {
    recipes
  }
}

export default connect(mapStateToProps)(Cookbook)
