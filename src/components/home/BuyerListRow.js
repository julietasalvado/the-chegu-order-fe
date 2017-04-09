import React, {PropTypes} from 'react';

const BuyerListRow = ({buyer}) => {
  return (
    <tr>
      <td>

        <div>
          <h4 className="ui image header">
            <img src={require(`../../assets/images/avatar/avatar1.jpg`)} className="ui mini rounded image"/>
            <div className="content">
              {buyer.username}
              <div className="sub header">Glober</div>
            </div>
          </h4>
          <div>
            {buyer.foodShopper &&
            <a className="ui image label">
              <img src={require(`../../assets/images/shopping_cart.png`)}/>
              Shopper
            </a>
            }
            {buyer.moneyGatherer &&
            <a className="ui image label">
              <img src={require(`../../assets/images/money_bag.png`)}/>
              Gatherer
            </a>
            }
          </div>
        </div>
      </td>
      <td className="center aligned">
        {buyer.selection==1 &&
        <div><i className="large green checkmark icon"></i>
          {buyer.unpaired &&
          <div className="ui icon" data-tooltip="Go and find someone to share your half sandwich with!"
               data-inverted="">
            <i className="yellow warning sign icon"></i>
          </div>
          }
        </div>
        }
      </td>
      <td className="center aligned">
        {buyer.selection==2 &&
          <div><i className="large green checkmark icon"></i>
            {buyer.unpaired &&
              <div className="ui icon" data-tooltip="Go and find someone to share your half sandwich with!"
                   data-inverted="">
                <i className="yellow warning sign icon"></i>
              </div>
            }
          </div>
        }
      </td>
    </tr>
  );
};

BuyerListRow.propTypes = {
  buyer: PropTypes.object.isRequired
};

export default BuyerListRow;
