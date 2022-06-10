import { createStore } from "vuex";

import MediumService from "../services/medium.service";


export default createStore({
  state: {
    "medium": {
      "userId": "@danielvieira_88575",
      "posts": []
    }
  },
  getters: {
  },
  mutations: {
    mediumPosts(state, data) {
      state.medium.posts = data;
    },
  },
  actions: {
    async getMediumPosts({ commit }) {

      const response = await MediumService.getPosts();
  
      commit("mediumPosts", response);

      return true;

    },
  },
  modules: {
  }
})
