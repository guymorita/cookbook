
import { RECIPE_ADD } from '../actions/recipe';

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
      const { recipeName, ingredients } = action;
      console.log('recipeName, ingredients', recipeName, ingredients);
      const newRecipe = {
        title: recipeName,
        ingredients: ingredients.split(',')
      };
      return Object.assign([], state, state.concat(newRecipe));
    default:
      return state;
  }
}
