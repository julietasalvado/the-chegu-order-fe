import React from 'react';
import TextInput from '../common/TextInput';

const BuyerForm = ({buyer, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <TextInput
        name="username"
        label="username"
        value={buyer.username}
        onChange={onChange}
        error={errors.title}
        placeholder="Username..."
      />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="iu button"
        tabIndex="0"
        onClick={onSave}/>
    </form>
  );
};

BuyerForm.propTypes = {
  buyer: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default BuyerForm;

