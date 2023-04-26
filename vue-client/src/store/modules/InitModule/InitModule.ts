import { Module } from "vuex";
import InitGetters from "./InitGetters";
import InitMutations from "./InitMutations";
import InitActions from "./InitActions";

export interface InitModuleInitialStateType {
  isAuth: boolean;
  token: string;
  currentUser: any | null;
}

const InitModule: Module<InitModuleInitialStateType, any> = {
  namespaced: true,
  state: () => ({
    isAuth: false,
    token: "",
    currentUser: null,
  }),
  getters: InitGetters,
  mutations: InitMutations,
  actions: InitActions,
};
export default InitModule;
