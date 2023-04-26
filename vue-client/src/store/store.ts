import { createStore } from "vuex";
import InitModule from "./modules/InitModule/InitModule";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    init: InitModule,
  },
});
export default store;
