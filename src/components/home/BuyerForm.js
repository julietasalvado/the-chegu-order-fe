import React from 'react';
import TextInput from '../common/TextInput';

const BuyerForm = ({buyer, allBuyers, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <TextInput
        name="username"
        label="username"
        value={buyer.username}
        onChange={onChange}
        error={errors.title}/>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="iu button"
        tabIndex="0"
        onClick={onSave}/>
    </form>
  );
};

BuyerForm.propTypes = {
  buyer: React.PropTypes.object.isRequired,
  allBuyers: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default BuyerForm;

