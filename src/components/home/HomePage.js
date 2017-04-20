import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as buyerActions from '../../actions/buyerActions';
import * as orderActions from '../../actions/orderActions';
import BuyerForm from './BuyerForm';
import {bindActionCreators} from 'redux';
import BuyerList from './BuyerList';
import CardColumn from '../common/CardColumn';
import {Grid} from 'semantic-ui-react';
import toastr from 'toastr';

class HomePage extends React.Component {

  //--------initialize state and bind functions--------
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {username: ""},
      buyer: Object.assign({}, props.buyer),
      errors: {},
      saving: false,
      order: Object.assign({}, props.order)
    };

    //bind statements for functions
    this.updateBuyerState = this.updateBuyerState.bind(this);
    this.saveBuyers = this.saveBuyers.bind(this);
  }

  //--------child functions that are called by 'render'--------
  updateBuyerState(event) {
    const field = event.target.name;
    let buyer = this.state.buyer;
    buyer[field] = event.target.value;
    return this.setState({buyer: buyer});
  }

  saveBuyers(event) {
    event.preventDefault();
    this.setState({saving:true});
    this.props.actions.saveBuyer(this.state.buyer)
      .then( /*when it finished*/() => this.afterSaving())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  afterSaving() {
    this.setState({saving:false});
    toastr.success('You are in the order! Congrats!');
  }

  //it should call a child component instead of containing the markup
  render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={6}>
          <CardColumn
            order={this.state.order}
            errors={this.state.errors}
          />
        </Grid.Column>
        <Grid.Column>
          <h1>The Chegu Order</h1>
          <BuyerForm
            buyer={this.state.buyer}
            errors={this.state.errors}
            onChange={this.updateBuyerState}
            onSave={this.saveBuyers}
            saving={this.state.saving}
          />
          <BuyerList buyers={this.props.users}/>
        </Grid.Column>
      </Grid>
    );
  }
}

//validations
HomePage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  buyer: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired
};

//------redux connect and related functions--------
function mapStateToProps(state, ownProps) {
  /*what I want to expose from the component?*/

  //empty buyer
  let buyer = {
    id: '',
    username: '',
    selection: 0,
    foodShopper: false,
    moneyGatherer: false,
    userUrl: '',
    unpaired: false
  };

  //empty order
  // let order = {
  //   place: '',
  //   date: '',
  //   foodShopper: '',
  //   moneyGatherer: '',
  //   close: true
  // };

  return {
    users: state.buyers, /*the reducer*/
    order: state.order,
    buyer: buyer
  };
}

//wraps an action in a call of dispatch so it's easy to use
function mapDispatchToProps(dispatch) {
  //what actions are available in our components
  return {
    actions: bindActionCreators(buyerActions, orderActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
//exporting a component decorated with react-redux connect function
//two function call: the result of connect is a function that will call the container component
//it the same that ->
// const connectStateAndProps =  connect(mapStateToProps, mapDispatchToProps);
// export default connectStateAndProps(HomePage);
