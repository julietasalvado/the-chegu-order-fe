import React from 'react';
import { Image, List } from 'semantic-ui-react';

const ListCurrentOrder = (order) => {
  return(
    <List selection verticalAlign="middle">
      <List.Item>
        <Image avatar src={require(`../../assets/images/clock.png`)} />
        <List.Content>
          <List.Header>Today, 1 p.m.</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src={require(`../../assets/images/warehouse.png`)} />
        <List.Content>
          <List.Header>{order.order.place}</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src={require('../../assets/images/shopping_cart.png')} />
        <List.Content>
          <List.Header>Food Shopper: undefined</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src={require(`../../assets/images/money_bag.png`)} />
        <List.Content>
          <List.Header>Money Gatherer: undefined</List.Header>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default ListCurrentOrder;
