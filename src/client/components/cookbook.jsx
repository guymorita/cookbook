
import React, {Component} from "react";
import { connect } from 'react-redux';

import RecipeList from "./recipe-list";
import AddRecipeModal from './recipe/add-recipe-modal';
import { recipeAdd, recipeDelete, recipeEdit } from '../actions/recipe';

class Cookbook extends Component {
  constructor(props) {
    super(props);
  }

  addRecipe(values) {
    const { title, ingredients } = values;
    this.props.onAdd(title, ingredients);
  }

  deleteRecipe(id) {
    this.props.onDelete(id);
  }

  editRecipe(values) {
    const { id, title, ingredients } = values;
    this.props.onEdit(id, title, ingredients);
  }

  render(){
    const { recipes } = this.props;
    return (
      <div>
        <RecipeList recipeData={recipes} deleteRecipe={this.deleteRecipe.bind(this)} onSubmit={this.editRecipe.bind(this)}/>
        <AddRecipeModal onSubmit={this.addRecipe.bind(this)} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (title, ingredients) => dispatch(recipeAdd(title, ingredients)),
    onDelete: (id) => dispatch(recipeDelete(id)),
    onEdit: (id, title, ingredients) => dispatch(recipeEdit(id, title, ingredients))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cookbook)
