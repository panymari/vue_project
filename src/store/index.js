import { createStore } from "vuex";
import recommendations from "@/store/modules/recommendations";
import users from "@/store/modules/users";
import posts from "@/store/modules/posts";

export default createStore({
  modules: {
    recommendations,
    posts,
    users
  }
});
