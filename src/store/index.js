import { createStore } from "vuex";
import recommendations from './modules/recommendations';

export default createStore({
  modules: {
    recommendations
  }
});
