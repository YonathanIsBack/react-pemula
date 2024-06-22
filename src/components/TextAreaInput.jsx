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
    };
  }

  onChange = (event) => {
    this.setState(() => ({ value: event.target.value }));
    this.state.onChange(this.state.id, event);
  };

  render() {
    return (
      <>
        <label>{this.state.label}</label>
        <textarea className={`input input-text-${this.state.id}`} id={`input-text-${this.state.id}`} name={this.state.id} onChange={this.onChange} value={this.state.value} placeholder={this.state.placeholder} />
      </>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
