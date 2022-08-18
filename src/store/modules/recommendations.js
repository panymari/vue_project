import axios from "axios";

export default {
    actions: {
         fetchRecommendations({ commit, getters, dispatch }, limit = 3) {
            axios
                .get('https://jsonplaceholder.typicode.com/todos?_limit=' + limit)
                .then(response => {
                    commit('updateRecommendations', response.data);
                })
                .catch(error => console.log(error));
         },
    },
    mutations: {
        updateRecommendations(state, recommendations) {
            state.recommendations = recommendations
        },
    },
    state: {
        recommendations: []
    },
    getters: {
        titleRecommendations(state) {
            return state.recommendations.filter((item) => {
                return item.title;
            })
        },
        allRecommendations(state) {
            return state.recommendations;
        }
    }
}
