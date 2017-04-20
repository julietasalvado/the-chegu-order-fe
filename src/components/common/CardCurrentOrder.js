import React from 'react';
import {Card} from 'semantic-ui-react';
import ListCurrentOrder from './ListCurrentOrder';
import NewOrder from '../order/NewOrder';

const CardCurrentOrder = (order) => {
  return(
    <div>
      {order.order != '' && order.order.place != '' &&
      <Card>
        <div>
          <Card.Content header="Current Order"/>
          <Card.Content extra>
            <ListCurrentOrder order={order}/>
          </Card.Content>
        </div>
      </Card>
      }
      {(order.order == '' || order.order.place == '') &&
      <NewOrder />
      }
    </div>
  );
};

export default CardCurrentOrder;
