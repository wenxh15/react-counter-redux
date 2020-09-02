const counterSelector = (state) => state.count;
const loadingStatusSelector = (state) => state.usersLoadingStatus;
const usersSelector = (state) => state.users;

export default {
  counterSelector,
  loadingStatusSelector,
  usersSelector
};
