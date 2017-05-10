
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class AddEditRecipeForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Recipe Name</label>
          <Field name="title" component="input" type="text"/>
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

AddEditRecipeForm = reduxForm({
  form: 'add_edit_recipe'
})(AddEditRecipeForm);

export default AddEditRecipeForm;
