
import { List } from 'immutable';

import { RECIPE_ADD, RECIPE_DELETE, RECIPE_EDIT } from '../actions/recipe';

const initialState = [
  {
    title: 'Tonkotsu Ramen',
    ingredients: ['Onions', 'Soy Sauce', 'Eggs', 'Pork', 'Sake', 'Mirin', 'Rice']
  },
  {
    title: 'Saag Paneer',
    ingredients: ['Spinach', 'Onion', 'Ginger', 'Garlic', 'Vegetable Oil', 'Milk', 'Lemon Juice', 'Garam Masala']
  }
];

export default function recipes(state = initialState, action) {
  switch(action.type) {
    case RECIPE_ADD:
      const { title, ingredients } = action;
      const newRecipe = {
        title: title,
        ingredients: ingredients.split(',')
      };
      return state.concat(newRecipe);
    case RECIPE_DELETE:
      const stateCp = List(state);
      return stateCp.delete(action.id);
    case RECIPE_EDIT:
      const stateCopy = List(state);
      const { id } = action;
      const editedRecipe = {
        title: action.title,
        ingredients: action.ingredients
      };
      return stateCopy.update(id, () => {return editedRecipe});
    default:
      return state;
  }
}
