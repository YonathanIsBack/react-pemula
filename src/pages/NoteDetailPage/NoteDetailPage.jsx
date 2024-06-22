import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  archiveNote, deleteNote, getNote, unarchiveNote,
} from '../../utils/local-data';
import { showFormattedDate } from '../../utils/index';

function NoteDetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (<NoteDetailPage id={id} navigate={navigate} />);
}

class NoteDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };
  }

  onClickSpecialAction = () => {
    const { note } = this.state;
    if (note.archived) {
      unarchiveNote(note.id);
    } else {
      archiveNote(note.id);
    }

    this.setState(() => ({
      note: getNote(note.id),
    }));
  };

  onClickDeleteNote = () => {
    deleteNote(this.state.note.id);
    this.props.navigate('/');
  };

  render() {
    return (
      <div>
        <Link to="/" className="button">Kembali</Link>
        <h1>Detail Catatan</h1>
        <div className="content-detail-note">
          <h2>{this.state.note.title}</h2>
          <p>{showFormattedDate(this.state.note.createdAt)}</p>
          <p>{this.state.note.body}</p>
          <div className="content-action">
            <button type="button" className="button content-action-delete" onClick={this.onClickDeleteNote}>Hapus</button>
            {this.state.note.archived === false
              ? (
                <button
                  type="button"
                  className="button content-action-archive"
                  onClick={this.onClickSpecialAction}
                >
                  Arsipkan
                </button>
              )
              : (
                <button
                  type="button"
                  className="button content-action-restore"
                  onClick={this.onClickSpecialAction}
                >
                  Kembalikan
                </button>
              )}
          </div>
        </div>
      </div>
    );
  }
}

NoteDetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default NoteDetailPageWrapper;
