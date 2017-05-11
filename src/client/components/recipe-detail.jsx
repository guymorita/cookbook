
import React, {Component} from "react";
import { Accordion, AccordionItem } from 'react-sanfona';

import EditRecipeModal from './recipe/edit-recipe-modal';

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, deleteRecipe, onSubmit, recipe } = this.props;
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
          <button type="submit" onClick={deleteRecipe.bind(this, id)}>DELETE</button>
          <EditRecipeModal id={id} recipe={recipe} onSubmit={onSubmit}/>
        </div>
      </div>
    )
  }
};

export default RecipeDetail;
