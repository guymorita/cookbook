import React, {Component} from "react";
import { Accordion, AccordionItem } from 'react-sanfona';
import EditRecipeModal from './recipe/edit-recipe-modal';

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
    const { id, onSubmit, recipe } = this.props;
    const { ingredients, title } = recipe;
    return (
      <div>
        <Accordion>
          <AccordionItem title={title}>
            {ingredients.map((ingredient, ind) => {
              return (
                <div key={ind}>
                  {ingredient}
                </div>
              );
            })}
          </AccordionItem>
        </Accordion>
        <div>
          <button type="submit" onClick={this.deleteRecipe.bind(this)}>DELETE</button>
          <EditRecipeModal id={id} recipe={recipe} onSubmit={onSubmit}/>
        </div>
      </div>
    )
  }
};

export default RecipeDetail;
