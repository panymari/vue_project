import axios from "axios";

export default {
    actions: {
        fetchPosts({commit, getters, dispatch}) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    commit('updatePosts', response.data);
                })
                .catch(error => console.log(error));
        },
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
    },
    state: {
        posts: []
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
        getPostsByUserId: (state) => (id) => {
            return state.posts.filter(i => i.userId === id) || {};
        },
    }
}
