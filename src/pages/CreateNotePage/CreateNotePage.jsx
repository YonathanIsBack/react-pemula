import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { PropTypes } from 'prop-types';
import NotesInputForm from './NotesInputForm';
import { addNote } from '../../utils/local-data';

function CreateNotePageWrapper() {
  const navigate = useNavigate();

  const onAddNote = (note) => {
    const { title, body } = note;
    addNote({ title, body });
    navigate('/');
  };

  return (<CreateNotePage onAddNote={onAddNote} />);
}

class CreateNotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onAddNote: props.onAddNote,
    };
  }

  onAddNote = (note) => {
    this.state.onAddNote(note);
  };

  render() {
    return (
      <div>
        <Link to="/" className="button">Kembali</Link>
        <h2>Tambah Catatan Baru</h2>
        <NotesInputForm onAddNote={this.onAddNote} />
      </div>
    );
  }
}

CreateNotePage.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default CreateNotePageWrapper;
