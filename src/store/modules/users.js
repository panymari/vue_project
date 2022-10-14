import axios from "axios";

export default {
    actions: {
        fetchUsers({commit, getters, dispatch}) {
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    commit('updateUsers', response.data);
                })
                .catch(error => console.log(error));
        },
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
    },
    state: {
        users: []
    },
    getters: {
        getUsers(state) {
            return state.users;
        },
        getUserById: (state) => (id) => {
            return state.users.find(i => i.id === id) || {};
        },
        filteredUsers: (state) => (value) => {
            return state.users.filter((item) => {
                const userName = item.name.toLowerCase();
                return userName.includes(value.trim().toLowerCase());
            });
        }
    }
}
