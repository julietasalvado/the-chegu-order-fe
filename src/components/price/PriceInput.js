
import React from 'react';
import { Input, Label } from 'semantic-ui-react';

const PriceInput = () => (
  <Input labelPosition="right" type="text" placeholder="Price">
    <Label basic>$</Label>
    <input />
  </Input>
);

export default PriceInput;
