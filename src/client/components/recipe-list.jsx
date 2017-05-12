
import React, { Component } from "react";
import { connect } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';

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
        <Accordion>
          {recipes.map((recipe, ind) => {
            return (
              <AccordionItem title={recipe.title} slug={ind} key={ind}>
                <RecipeDetail key={ind} recipe={recipe}/>
              </AccordionItem>
            );
          })}
        </Accordion>
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
