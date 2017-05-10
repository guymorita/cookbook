
export const RECIPE_ADD = 'RECIPE_ADD';

export const recipeAdd = (recipeName, ingredients) => {
  return {
    type: RECIPE_ADD,
    recipeName,
    ingredients
  };
};
