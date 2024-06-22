import React from 'react';
import { PropTypes } from 'prop-types';
import NoteCard from '../../components/NoteCard';

function ArchivedNoteList({ notes, moveNote, onDeleteNote }) {
  return (
    <div>
      <h1>Daftar Catatan Yang Diarsipkan</h1>
      <div className="note-list">
        {notes.map((note) => (
          <NoteCard
            note={note}
            key={note.id}
            moveNote={moveNote}
            onDeleteNote={onDeleteNote}
          />
        ))}
      </div>
    </div>
  );
}

ArchivedNoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    archived: PropTypes.bool,
    createdAt: PropTypes.string,
  })).isRequired,
  moveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default ArchivedNoteList;
