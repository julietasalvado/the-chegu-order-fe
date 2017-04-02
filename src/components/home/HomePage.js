import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as buyerActions from '../../actions/buyerActions';
// import {Link} from 'react-router';

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

  constructor(props, context) {
    super(props, context);

    this.state = {
      user: { username: ""}
    };

    //bind statements for functions
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onUsernameChange(event) {
    const user = this.state.user;
    user.username = event.target.value;
    this.setState({ user:user });
  }

  onClickSave() {
    this.props.dispatch(buyerActions.addBuyer(this.state.user));
  }

  buyerRow(user, index) {
    return <div key={index}>{user.username}</div>;
  }

  render() {
    debugger;
    return (
      <div className="jumbotron">
        <h1>The Chegu Order</h1>
        {this.props.users.map(this.buyerRow)}
        <h2>Add a buyer</h2>
        <input
          type="text"
          onChange={this.onUsernameChange}
          value={this.state.user.username} />
        <input
          type="submit"
          onChange={this.onClickSave}
          value="Save" />
      </div>
    );
  }
}

//validations
HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  /*what I want to expose from the component?*/
  debugger;
  return {
    users: state.buyers /*the reducer*/
  };
}

export default connect(mapStateToProps/*, mapDispatchToProps*/)(HomePage);
//exporting a component decorated with react-redux connect function
//two function call: the result of connect is a function that will call the container component
//it the same that ->
// const connectStateAndProps =  connect(mapStateToProps, mapDispatchToProps);
// export default connectStateAndProps(HomePage);
