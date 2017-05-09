import React, {Component} from "react";

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
    return (
      <div>
        <div>This is the RecipeDetail component</div>
        <div>
          <button type="submit" onClick={this.deleteRecipe.bind(this)}>DELETE</button>
          <button type="submit" onClick={this.editRecipe.bind(this)}>EDIT</button>
        </div>
      </div>
    )
  }
};

export default RecipeDetail;
