import React, {Component} from "react";
import { connect } from 'react-redux';

import RecipeList from "./recipe-list";
import AddRecipeModal from './add-recipe/add-recipe-modal';
import EditRecipeForm from './edit-recipe-form';

import { recipeAdd } from '../actions/recipe';
import { bindActionCreators } from 'redux';

class Cookbook extends Component {
  constructor(props) {
    super(props);
  }

  submit(values) {
    const { recipeName, ingredients } = values;
    this.props.onAdd(recipeName, ingredients);
  }

  render(){
    const { recipes } = this.props;
    return (
      <div>
        <RecipeList recipeData={recipes}/>
        <AddRecipeModal onSubmit={this.submit.bind(this)} />
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
    onAdd: (recipeName, ingredients) => dispatch(recipeAdd(recipeName, ingredients))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cookbook)
