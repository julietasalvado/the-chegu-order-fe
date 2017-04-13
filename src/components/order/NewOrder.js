import React from 'react';
import {Card} from 'semantic-ui-react';

const NewOrder = (order) => {
  return(
    <div>
      <Card>
        <Card.Content header="Current Order"/>
        <Card.Content description="Create the first order!" />

      </Card>
    </div>
  );
};

export default NewOrder;
