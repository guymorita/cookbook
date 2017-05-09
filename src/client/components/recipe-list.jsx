import React, {Component} from "react";
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
    return (
      <div>
        <h3>Recipe List</h3>
        <RecipeDetail />
      </div>
    );
  }
};

export default RecipeList;
