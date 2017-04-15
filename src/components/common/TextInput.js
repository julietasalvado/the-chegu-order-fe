import React, {PropTypes} from 'react';
import {Input} from 'semantic-ui-react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  // let wrapperClass = 'ui form';
  // if (error && error.length > 0) {
  //   wrapperClass += " " + 'has-error';
  // }

  return (
      <div className="ui small right labeled left icon input">
        <Input text
               placeholder={placeholder}
               name={name}
               value={value}
               onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>

  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
