
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class AddRecipeForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <Field name="recipeName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients (comma delimited)</label>
          <Field name="ingredients" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

AddRecipeForm = reduxForm({
  form: 'add_recipe'
})(AddRecipeForm);

export default AddRecipeForm;
