import axios from "axios";

export default {
    actions: {
         fetchRecommendations({ commit, getters, dispatch }, limit = 5) {
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
            state.recommendations = recommendations;
        },
    },
    state: {
        recommendations: []
    },
    getters: {
        getTitleRecommendations: state => {
            return state.recommendations.filter((item) => {
                return item.title;
            })
        },
    }
}
