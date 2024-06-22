import React from 'react';
import { PropTypes } from 'prop-types';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      onSubmit: props.onSubmit,
    };
  }

  onSubmit = () => this.state.onSubmit();

  render() {
    return (
      <div>
        <input type="button" className={`input button input-text-${this.state.id}`} id={`input-text-${this.state.id}`} name={this.state.id} value="SUBMIT" onClick={this.onSubmit} />
      </div>
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TextInput;
