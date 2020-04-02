import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ConnectedApp, { mapStateToProps, App } from "./App";

describe("<App />", () => {
  const actions = {
    decreaseCounter: jest.fn(),
    addCounter: jest.fn()
  };

  const mockStore = configureStore();

  const initialState = {
    count: 0
  };

  const props = {
    actions,
    ...mapStateToProps(initialState)
  };

  const store = mockStore(initialState);

  it("renders connected component", () => {
    const component = renderer.create(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("counter button interact when onOclick", () => {
    const component = renderer.create(<App {...props} />);
    const addButton = component.root.findByProps({
      className: "+"
    });

    addButton.props.onClick();

    expect(actions.addCounter).toHaveBeenCalledTimes(1);

    const decreaseButton = component.root.findByProps({
      className: "-"
    });
    decreaseButton.props.onClick();
    expect(actions.decreaseCounter).toHaveBeenCalledTimes(1);
  });
});
