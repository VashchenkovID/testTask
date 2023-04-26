const InitActions = {
  setCurrentUser: function ({ commit }, value) {
    commit("SET_CURRENT_USER", value);
  },
};
export default InitActions;
