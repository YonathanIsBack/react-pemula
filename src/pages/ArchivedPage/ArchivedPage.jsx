import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ArchivedNoteList from './ArchivedNoteList';
import {
  deleteNote, getArchivedNotes, unarchiveNote,
} from '../../utils/local-data';
import SearchForm from '../HomePage/SearchForm';
import NavigationLink from '../../components/NavigationLink';

function ArchivedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title') === null ? '' : searchParams.get('title');

  return (<ArchivedPage searchParams={title} setSearchParams={setSearchParams} />);
}

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      searchParam: props.searchParams,
    };

    this.onDelete = this.onDelete.bind(this);
    this.moveNote = this.moveNote.bind(this);
    this.searchNote = this.searchNote.bind(this);
  }

  onDelete = (note) => {
    deleteNote(note.id);
    this.setState(() => ({
      notes: getArchivedNotes,
    }));
  };

  moveNote = (note) => {
    unarchiveNote(note.id);
    deleteNote(note.id);
    this.setState(() => ({
      notes: getArchivedNotes,
    }));
  };

  searchNote = (event) => {
    this.props.setSearchParams({ title: event.target.value });
    this.setState(() => ({
      searchParam: event.target.value,
    }));
  };

  getNotes = () => {
    if (this.state.searchParam !== '') return this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchParam.toLowerCase()));

    return this.state.notes;
  };

  render() {
    return (
      <div>
        <h1>Catatan Disimpan</h1>
        <NavigationLink />
        <SearchForm
          param={this.state.searchParam}
          onChangeSearch={this.searchNote}
        />
        {this.getNotes().length === 0 && <h3>Tidak ada catatan</h3>}
        {this.getNotes().length !== 0
              && (
              <ArchivedNoteList
                notes={this.getNotes()}
                onDeleteNote={this.onDelete}
                moveNote={this.moveNote}
              />
              )}
      </div>
    );
  }
}

ArchivedPage.propTypes = {
  searchParams: PropTypes.string.isRequired,
  setSearchParams: PropTypes.func.isRequired,
};

export default ArchivedPageWrapper;
