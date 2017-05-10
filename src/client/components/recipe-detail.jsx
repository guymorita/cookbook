import React, {Component} from "react";
import { Accordion, AccordionItem } from 'react-sanfona';

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
    const { title, ingredients } = recipe;
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
          <button type="submit" onClick={this.editRecipe.bind(this)}>EDIT</button>
        </div>
      </div>
    )
  }
};

export default RecipeDetail;
