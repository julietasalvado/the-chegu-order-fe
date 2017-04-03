import React, {PropTypes} from 'react';

const BuyerListRow = ({buyer}) => {
  return (
    <tr>
      <td>
        <h4 className="ui image header">
          <img src={require(`../../assets/images/avatar/avatar1.jpg`)} className="ui mini rounded image"/>
          <div className="content">
            {buyer.username}
          </div>
        </h4>
      </td>
    </tr>
  );
};

BuyerListRow.propTypes = {
  buyer: PropTypes.object.isRequired
};

export default BuyerListRow;
