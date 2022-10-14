<template>
  <div class="users">
    <div v-for="user in getUsers" :key="user.id">
      <router-link class="userItem" :to="{name: 'UserPage' , params:{ id: user.id }}">
        <User :user="user"/>
      </router-link>
    </div>
  </div>

</template>

<script>
import User from "@/components/user/User";

export default {
  name: "Users",
  components: {User}
}
</script>

<script setup>
import {useStore} from 'vuex';
import {computed, onMounted} from "vue";

const store = useStore();

const getUsers = computed(() => {
  return store.getters.getUsers
})

onMounted(() => {
  store.dispatch("fetchUsers");
})
</script>


<style scoped lang="scss">
@import './users.scss';
</style>