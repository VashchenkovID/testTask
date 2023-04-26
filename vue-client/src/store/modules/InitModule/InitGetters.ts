import { InitModuleInitialStateType } from "./InitModule";

const InitGetters = {
  getCurrentUser: function (state: InitModuleInitialStateType) {
    return state.currentUser;
  },
  getIsAuth: function (state: InitModuleInitialStateType) {
    return state.isAuth;
  },
};
export default InitGetters;
