import React from 'react';
import {Card} from 'semantic-ui-react';
import NewOrderForm from './NewOrderForm';

const NewOrder = (order, errors) => {
  return(
    <div>
      <Card>
        <Card.Content header="Current Order"/>
        <Card.Content description="There isn't any opened order" />
        <Card.Content extra>
          <div className="ui bottom attached button">
            <i className="add icon"></i>
            Create a new order!
          </div>
          <NewOrderForm
            order
            errors
          />
        </Card.Content>
      </Card>
    </div>
  );
};

export default NewOrder;
