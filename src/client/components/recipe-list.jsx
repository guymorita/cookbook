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
    const { onSubmit, recipeData } = this.props;
    return (
      <div>
        <h3>Recipe List</h3>
        {recipeData.map((recipe, id) => {return <RecipeDetail key={id} id={id} onSubmit={onSubmit} recipe={recipe}/>})}
      </div>
    );
  }
};

export default RecipeList;
