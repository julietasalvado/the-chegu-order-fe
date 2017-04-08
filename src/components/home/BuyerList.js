/**
 * Presentational component.
 */
import React, {PropTypes} from 'react';
import BuyerListRow from './BuyerListRow';

const BuyerList = ({buyers}) => {
  return (
    <table className="ui structured celled table">
      <thead>
        <tr>
          <th rowSpan="2">Username</th>
          <th colSpan="2">Selection</th>
        </tr>
        <tr>
          <th>Chicken Breast</th>
          <th>Chicken Thing</th>
        </tr>
      </thead>
      <tbody>
      {buyers.map((buyer) =>
        <BuyerListRow key={buyer.id} buyer={buyer}/>
      )}
      </tbody>
    </table>
  );
};

BuyerList.propTypes = {
  buyers: PropTypes.array.isRequired
};

export default BuyerList;
