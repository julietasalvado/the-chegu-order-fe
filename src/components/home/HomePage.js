import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as buyerActions from '../../actions/buyerActions';
import BuyerForm from './BuyerForm';
import {bindActionCreators} from 'redux';
import BuyerList from './BuyerList';
import CardColumn from '../common/CardColumn';
import {Grid} from 'semantic-ui-react';

class HomePage extends React.Component {

  //--------initialize state and bind functions--------
  constructor(props, context) {
    super(props, context);

    this.state = {
      /*user: {username: ""},*/
      buyer: Object.assign({}, props.buyer),
      errors: {},
      saving: false
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
      .then( /*when it finished*/() => this.setState({saving:false}));
  }

  //it should call a child component instead of containing the markup
  render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={6}>
          <CardColumn/>
        </Grid.Column>
        <Grid.Column>
          <h1>The Chegu Order</h1>
          <BuyerForm
            buyer={this.state.buyer}
            allbuyers={[]}
            buyers={this.state.buyers}
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
  buyer: PropTypes.object.isRequired
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

  return {
    users: state.buyers, /*the reducer*/
    buyer: buyer
  };
}

//wraps an action in a call of dispatch so it's easy to use
function mapDispatchToProps(dispatch) {
  //what actions are available in our components
  return {
    actions: bindActionCreators(buyerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
//exporting a component decorated with react-redux connect function
//two function call: the result of connect is a function that will call the container component
//it the same that ->
// const connectStateAndProps =  connect(mapStateToProps, mapDispatchToProps);
// export default connectStateAndProps(HomePage);
