import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const BuyerListRow = ({buyer}) => {
  return(
    <tr>
      <td>{buyer.username}</td>
    </tr>
  );
};

BuyerListRow.propTypes = {
  buyer: PropTypes.object.isRequired
};

export default BuyerListRow;
