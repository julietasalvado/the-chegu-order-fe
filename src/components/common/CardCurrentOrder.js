import React from 'react';
import { Card } from 'semantic-ui-react';
import ListCurrentOrder from './ListCurrentOrder';

const CardCurrentOrder = (order) => (
  <Card>
    <Card.Content header="Current Order" />
    <Card.Content extra>
      <ListCurrentOrder/>
    </Card.Content>
  </Card>
);

export default CardCurrentOrder;
