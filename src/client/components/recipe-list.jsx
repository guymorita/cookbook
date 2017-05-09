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
    const { recipeData } = this.props;
    return (
      <div>
        <h3>Recipe List</h3>
        {recipeData.map((recipe, ind) => {return <RecipeDetail key={ind} recipe={recipe}/>})}
      </div>
    );
  }
};

export default RecipeList;
