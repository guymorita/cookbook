import React, {Component} from 'react';
import Modal from 'react-modal';
import AddRecipeForm from './add-recipe-form';

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
    return (
      <div>
        <button onClick={this.openModal.bind(this)}>Add Recipe</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Example Modal"
        >

          <h2 ref="subtitle">Add Recipe</h2>
          <button onClick={this.closeModal.bind(this)}>close</button>
          <AddRecipeForm onSubmit={this.props.onSubmit}/>
        </Modal>
      </div>
    );
  }
};

export default AddRecipeModal;
