import React from 'react';
import { Card } from 'semantic-ui-react';
import CardCurrentOrder from './CardCurrentOrder';

const src = '/assets/images/wireframe/image.png';

const CardColumn = (order) => (
  <Card.Group itemsPerRow={1}>
    <Card raised image={src} />
    <CardCurrentOrder order={order}/>
  </Card.Group>
);

export default CardColumn;
