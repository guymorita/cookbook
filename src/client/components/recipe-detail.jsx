import React, { Component } from "react";

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
  }

  deleteRecipe() {
    this.props._deleteRecipe(this.props.id);
  }

  editRecipe() {
    this.props._editRecipe(this.props.id);
  }

  render() {
    const { recipe } = this.props;
    const { ingredients } = recipe;
    return (
      <div>
        {ingredients.map((ingredient, ind) => {
            return (
              <div key={ind}>
                {ingredient}
              </div>
            );
        })}
        <button type="submit" onClick={this.deleteRecipe.bind(this)}>DELETE</button>
        <button type="submit" onClick={this.editRecipe.bind(this)}>EDIT</button>
      </div>
    )
  }
};

export default RecipeDetail;
