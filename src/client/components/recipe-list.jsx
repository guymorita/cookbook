import React, {Component} from "react";
import { connect } from 'react-redux';
import RecipeDetail from "./recipe-detail";

class RecipeList extends Component{
  constructor() {
    super();
  }

  deleteRecipe(id) {
    this.props._removeRecipe(id);
  }

  editRecipe(id) {
    this.props._modifyRecipe(id);
  }

  render(){
    const { recipes } = this.props;
    return (
      <div>
        <h3>Recipe List</h3>
        {recipes.map((recipe, ind) => {return <RecipeDetail key={ind} recipe={recipe}/>})}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { recipes } = state
  return {
    recipes
  }
};

export default connect(mapStateToProps)(RecipeList);
