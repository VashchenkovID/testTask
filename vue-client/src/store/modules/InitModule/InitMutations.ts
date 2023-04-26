import { InitModuleInitialStateType } from "./InitModule";

const InitMutations = {
  SET_CURRENT_USER: function (state: InitModuleInitialStateType, value) {
    state.currentUser = value;
  },
  SET_IS_AUTH: function (state: InitModuleInitialStateType, value:boolean) {
    state.isAuth = value;
  },
};
export default InitMutations;
