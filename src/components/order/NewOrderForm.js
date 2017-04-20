import React from 'react';
import {Form, Segment} from 'semantic-ui-react';
import TextInput from '../common/TextInput';
import ClockPicker from '../time/ClockPicker';
import PriceInput from '../price/PriceInput';

const NewOrderForm = ({order, onSave, onChange, saving, errors}) => {
  return (

    <Segment basic>
      <Form>
        <div>
          <div className="field">
            <TextInput
              name="username"
              placeholder="Place to order food"
              value={order.place}
              onChange={onChange}
              error={errors.title}/>
          </div>
          <div className="field">
            <ClockPicker/>
          </div>
          <div className="field">
            <PriceInput/>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </div>
      </Form>
    </Segment>

  );
};

NewOrderForm.propTypes = {
  order: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default NewOrderForm;
