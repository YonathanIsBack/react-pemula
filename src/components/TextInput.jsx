import React from 'react';
import { PropTypes } from 'prop-types';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: props.label,
      id: props.id,
      value: props.value,
      placeholder: props.placeholder,
      onChange: props.onChange,
      limit: props.limit,
      remainingCharacter: props.limit,
    };
  }

  onChange = (event) => {
    if (event.target.value.length > this.state.limit) return;

    this.setState((previousState) => ({
      value: event.target.value,
      remainingCharacter: (previousState.limit !== undefined
        ? previousState.limit - event.target.value.length : undefined),
    }));

    this.state.onChange(this.state.id, event);
  };

  render() {
    return (
      <>
        <label htmlFor={this.state.id}>{this.state.label}</label>
        <br />
        {this.state.limit !== undefined && this.state.limit > 0 && (
        <p>
          Sisa Karakter:
          {this.state.remainingCharacter}
        </p>
        )}
        <input type="text" className={`input input-text-${this.state.id}`} id={`input-text-${this.state.id}`} name={this.state.id} onChange={this.onChange} value={this.state.value} placeholder={this.state.placeholder} />
      </>
    );
  }
}

TextInput.defaultProps = {
  limit: undefined,
  remainingCharacter: undefined,
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  limit: PropTypes.number,
  remainingCharacter: PropTypes.number,
};

export default TextInput;
