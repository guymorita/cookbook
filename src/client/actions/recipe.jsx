
export const RECIPE_ADD = 'RECIPE_ADD';
export const RECIPE_DELETE = 'RECIPE_DELETE';
export const RECIPE_EDIT = 'RECIPE_EDIT';

export const recipeAdd = (title, ingredients) => {
  return {
    type: RECIPE_ADD,
    title,
    ingredients
  };
};

export const recipeDelete = (id) => {
  return {
    type: RECIPE_DELETE,
    id
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
