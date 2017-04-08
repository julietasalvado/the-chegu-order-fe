import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'ui form';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <div className="ui small right labeled left icon input">
        <i className="users icon"></i>
        <input
        type="text"
        className="form-control"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
        <a className="ui tag label">
          {label}
        </a>
      </div>
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
