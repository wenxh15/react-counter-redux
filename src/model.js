import Action from "./constant";

const addCounter = () => ({
  type: Action.COUNTER_ADD
});

const decreaseCounter = () => ({
  type: Action.COUNTER_DECREASE
});

const requestUsers = () => {
  return (dispatch) => {
    dispatch(setUsersLoadingStatus());
    const url = "https://jsonplaceholder.typicode.com/users";
    return fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          console.warn("-----requestUsers() response error-----");
        } else {
          return res.json();
        }
      })
      .then((users) => {
        console.log(users);
        dispatch(setUsers(users));
      });
  };
};

const setUsers = (users) => ({
  type: Action.SET_USERS,
  payload: users //or data
});

const setUsersLoadingStatus = () => ({
  type: Action.SET_USERS_LOADING_STATUS
});

export const actions = {
  addCounter,
  decreaseCounter,
  requestUsers,
  setUsers,
  setUsersLoadingStatus
};

const initialState = {
  count: 0,
  users: [],
  usersLoadingStatus: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Action.COUNTER_ADD:
      return {
        ...state,
        count: state.count + 1
      };

    case Action.COUNTER_DECREASE:
      return {
        ...state,
        count: state.count - 1
      };

    case Action.SET_USERS:
      return {
        ...state,
        users: action.payload,
        usersLoadingStatus: false
      };

    case Action.SET_USERS_LOADING_STATUS:
      return { ...state, usersLoadingStatus: true };

    default:
      return { ...state };
  }
};

export default reducer;
