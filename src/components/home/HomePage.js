import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as buyerActions from '../../actions/buyerActions';
import {bindActionCreators} from 'redux';
import BuyerList from './BuyerList';
import CardColumn from '../common/CardColumn';

// class HomePage extends React.Component {
//   render() {
//     return (
//       <div className="jumbotron">
//         <h1>The Chegu Order</h1>
//       </div>
//     );
//   }
// }
//
// export default HomePage;

class HomePage extends React.Component {

  //--------initialize state and bind functions--------
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: { username: ""}
    };

    //bind statements for functions
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  //--------child functions that are called by 'render'--------
  onUsernameChange(event) {
    const user = this.state.user;
    user.username = event.target.value;
    this.setState({ user:user });
  }

  onClickSave() {
    this.props.actions.addBuyer(this.state.user);
  }

  //it should call a child component instead of containing the markup
  render() {
    return (
      <div className="ui page grid">
        <div className="two column row">
          <div className="column">
            <CardColumn/>
          </div>
          <div className="column">
            <h1>The Chegu Order</h1>
            <BuyerList buyers={this.props.users}/>
            <h2>Add a buyer</h2>
            <input
              type="text"
              onChange={this.onUsernameChange}
              value={this.state.user.username} />
            <input
              type="submit"
              onClick={this.onClickSave}
              value="Save" />
          </div>
        </div>
      </div>
    );
  }
}

//validations
HomePage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//------redux connect and related functions--------
function mapStateToProps(state, ownProps) {
  /*what I want to expose from the component?*/
  return {
    users: state.buyers /*the reducer*/
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
