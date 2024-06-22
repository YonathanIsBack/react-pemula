import React from 'react';
import { PropTypes } from 'prop-types';
import TextInput from '../../components/TextInput';
import ButtonInput from '../../components/ButtonInput';
import TextAreaInput from '../../components/TextAreaInput';

class NotesInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      onAddNote: props.onAddNote,
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeTextInput = this.onChangeTextInput.bind(this);
  }

  onChangeTextInput = (id, event) => {
    this.setState(() => ({
      [id]: event.target.value,
    }));
  };

  onSubmitHandler = () => {
    const note = {
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    this.state.onAddNote(note);
  };

  render() {
    return (
      <div className="notes-input">
        <form>
          <TextInput id="title" label="Title" onChange={this.onChangeTextInput} value={this.state.title} limit={50} placeholder="Judul catatan" />
          <TextAreaInput id="body" label="Body" onChange={this.onChangeTextInput} value={this.state.body} placeholder="Apa yang ingin dicatatat..." />
          <ButtonInput id="submit" onSubmit={this.onSubmitHandler} />
        </form>
      </div>
    );
  }
}

NotesInputForm.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};
export default NotesInputForm;
