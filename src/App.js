import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { actions } from "./model";
import selectors from "./selector";

import "./styles.css";

export class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired
  };

  render() {
    const { actions, count } = this.props;
    //console.log(actions);
    return (
      <div className="App">
        <h1>Counter</h1>
        <button className="-" onClick={actions.decreaseCounter}>
          -
        </button>
        <p>{count}</p>
        <button className="+" onClick={actions.addCounter}>
          +
        </button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  count: selectors.counterSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
