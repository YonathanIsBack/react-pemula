import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';

class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note,
      moveNote: props.moveNote,
      onDeleteNote: props.onDeleteNote,
    };
  }

  onClickSpecialAction = () => {
    this.state.moveNote(this.state.note);
  };

  onClickDeleteButton = () => {
    this.state.onDeleteNote(this.state.note);
  };

  render() {
    return (
      <div className="note-card">
        <Link to={`/notes/${this.state.note.id}`}><h3>{this.state.note.title}</h3></Link>
        <p>{showFormattedDate(this.state.note.createdAt)}</p>
        <p>{this.state.note.body}</p>
        <div className="card-action">
          <button type="button" className="button button-delete" onClick={this.onClickDeleteButton}>Hapus</button>
          {this.state.note.archived === false
            ? <button type="button" className="button button-archive" onClick={this.onClickSpecialAction}>Arsipkan</button>
            : <button type="button" className="button button-restore" onClick={this.onClickSpecialAction}>Kembalikan</button>}
        </div>
      </div>
    );
  }
}

NoteCard.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    archived: PropTypes.bool,
    createdAt: PropTypes.string,
  }).isRequired,
  moveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default NoteCard;
