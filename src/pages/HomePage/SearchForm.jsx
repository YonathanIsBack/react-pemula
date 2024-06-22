import React from 'react';
import { PropTypes } from 'prop-types';
import TextInput from '../../components/TextInput';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      param: props.param,
      onChangeSearch: props.onChangeSearch,
    };

    this.searchNote = this.searchNote.bind(this);
  }

  searchNote = (_, event) => {
    this.setState(() => ({
      param: event.target.value,
    }));

    this.state.onChangeSearch(event);
  };

  render() {
    return (
      <div className="search-input">
        <TextInput onChange={this.searchNote} value={this.state.param} id="search-note" label="Cari" placeholder="Apa yang mau dicari?" />
      </div>
    );
  }
}

SearchForm.propTypes = {
  param: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

export default SearchForm;
