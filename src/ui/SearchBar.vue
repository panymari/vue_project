<template>
  <div class="searchBar">
    <div v-if="isShowSearchBar" >
      <input @focus="this.value=''" type="text" v-model="input" placeholder="Search users..."/>
      <div class="hint">
        <router-link
            class="userItem"
            :to="{name: 'UserPage' , params:{ id: user.id }}"
            v-for="user in filteredUsers"
            :key="user.id"
            v-if="input&&filteredUsers.length"
        >
          <div class="hint-item">
            {{ user.name }}
          </div>
        </router-link>
        <div class="error" v-if="input&&!filteredUsers.length">
          <p>No results found!</p>
        </div>
      </div>
    </div>

    <button :class="!isShowSearchBar? 'search' : 'cross'" @click="changeTheState">
      <i :class="!isShowSearchBar? 'fa fa-search' : 'fa fa-times'"/>
    </button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "SearchBar",
  data() {
    return {
      isShowSearchBar: false,
      input: ""
    }
  },
  methods: {
    changeTheState() {
      this.isShowSearchBar = !this.isShowSearchBar;
      this.input = ""
    }
  }
}
</script>

<script setup>
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import {ref} from "vue";

const input = ref("");

const store = useStore();

const filteredUsers = computed(() => {
  return store.getters.filteredUsers(input.value);
});

onMounted(() => {
  store.dispatch("fetchUsers");
})

</script>

<style scoped lang="scss">
@import './searchBar.scss';
</style>