import React, {Component} from "react";
import { connect } from 'react-redux';

import RecipeList from "./recipe-list";
import AddRecipeModal from './recipe/add-recipe-modal';

import { recipeAdd, recipeEdit } from '../actions/recipe';
import { bindActionCreators } from 'redux';

class Cookbook extends Component {
  constructor(props) {
    super(props);
  }

  add(values) {
    const { title, ingredients } = values;
    this.props.onAdd(title, ingredients);
  }

  edit(values) {
    const { id, title, ingredients } = values;
    this.props.onEdit(id, title, ingredients);
  }

  render(){
    const { recipes } = this.props;
    return (
      <div>
        <RecipeList recipeData={recipes} onSubmit={this.edit.bind(this)}/>
        <AddRecipeModal onSubmit={this.add.bind(this)} />
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
    onEdit: (id, title, ingredients) => dispatch(recipeEdit(id, title, ingredients))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cookbook)
