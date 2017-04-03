/**
 * Presentational component.
 */
import React, {PropTypes} from 'react';
import BuyerListRow from './BuyerListRow';

const BuyerList = ({buyers}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Username</th>
        </tr>
      </thead>
      <body>
      {buyers.map((buyer) =>
        <BuyerListRow key={buyer.id} buyer={buyer}/>
      )}
      </body>
    </table>
  );
};

BuyerList.propTypes = {
  buyers: PropTypes.array.isRequired
};

export default BuyerList;
