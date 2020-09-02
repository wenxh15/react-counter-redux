import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { actions } from "./model";
import selectors from "./selector";

import "./styles.css";

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    loadingStatus: PropTypes.bool.isRequired,
    users: PropTypes.array
  };

  componentDidMount() {
    const { actions, loadingStatus } = this.props;
    if (!loadingStatus) {
      actions.requestUsers();
    }
  }

  get renderUserName() {
    const { users } = this.props;
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { actions, count } = this.props;
    // console.log(actions);
    return (
      <div className="App">
        <h1>Counter</h1>
        <button onClick={() => actions.decreaseCounter()}>-</button>
        <p>{count}</p>
        <button onClick={() => actions.addCounter()}>+</button>
        {this.renderUserName}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: selectors.counterSelector(state),
  loadingStatus: selectors.loadingStatusSelector(state),
  users: selectors.usersSelector(state)
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
