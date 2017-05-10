import React, {Component} from 'react';
import Modal from 'react-modal';
import AddEditRecipeForm from './add-edit-recipe-form';

class AddRecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { id, onSubmit, recipe } = this.props;
    const initialValues = Object.assign({}, recipe, {id});
    return (
      <div>
        <button onClick={this.openModal.bind(this)}>EDIT</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Edit Recipe Modal"
        >

          <h2 ref="subtitle">Edit Recipe</h2>
          <button onClick={this.closeModal.bind(this)}>close</button>
          <AddEditRecipeForm initialValues={initialValues} onSubmit={onSubmit}/>
        </Modal>
      </div>
    );
  }
};

export default AddRecipeModal;
