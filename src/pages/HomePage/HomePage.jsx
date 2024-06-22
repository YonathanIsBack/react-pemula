import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import NoteList from './NoteList';
import SearchForm from './SearchForm';
import {
  archiveNote, deleteNote, getActiveNotes,
} from '../../utils/local-data';
import NavigationLink from '../../components/NavigationLink';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title') === null ? '' : searchParams.get('title');

  return (<HomePage searchParams={title} setSearchParams={setSearchParams} />);
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      searchParam: props.searchParams,
    };

    this.moveNote = this.moveNote.bind(this);
    this.delete = this.delete.bind(this);
    this.searchNote = this.searchNote.bind(this);
  }

  getNotes = () => {
    if (this.state.searchParam !== '') return this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchParam.toLowerCase()));

    return this.state.notes;
  };

  moveNote = (movedNote) => {
    archiveNote(movedNote.id);

    this.setState(() => ({
      notes: getActiveNotes(),
    }));
  };

  delete = (deletedNote) => {
    deleteNote(deletedNote.id);

    this.setState(() => ({
      notes: getActiveNotes(),
    }));
  };

  searchNote = (event) => {
    this.props.setSearchParams({ title: event.target.value });
    this.setState(() => ({
      searchParam: event.target.value,
    }));
  };

  render() {
    return (
      <>
        <h1>Aplikasi Catatan</h1>
        <NavigationLink />
        <SearchForm
          param={this.state.searchParam}
          onChangeSearch={this.searchNote}
        />
        {this.getNotes().length === 0 && <h3>Tidak ada catatan</h3>}
        {this.getNotes().length !== 0
                    && (
                    <NoteList
                      notes={this.getNotes()}
                      moveNote={this.moveNote}
                      onDeleteNote={this.delete}
                    />
                    )}
      </>
    );
  }
}

HomePage.defaultProps = {
  searchParams: '',
};

HomePage.propTypes = {
  searchParams: PropTypes.string,
  setSearchParams: PropTypes.func.isRequired,
};

export default HomePageWrapper;
