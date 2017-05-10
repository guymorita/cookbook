
export const RECIPE_ADD = 'RECIPE_ADD';
export const RECIPE_EDIT = 'RECIPE_EDIT';

export const recipeAdd = (title, ingredients) => {
  return {
    type: RECIPE_ADD,
    title,
    ingredients
  };
};

export const recipeEdit = (id, title, ingredients) => {
  return {
    type: RECIPE_EDIT,
    id,
    title,
    ingredients
  };
};
