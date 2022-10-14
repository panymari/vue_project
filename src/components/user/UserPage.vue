<template>
  <div class="userPage">
    <div class="profile">
      <div class="userPhoto">
        <i class="fa fa-user-circle fa-5x" />
      </div>
      <div>
        <div class="name">{{user.name}}</div>
        <div class="userName">@{{user.username}}</div>
        <div>
          <span>Phone: </span>
          {{user.phone}}
        </div>
        <div>
          <span>Email: </span>
          {{user.email}}
        </div>
      </div>
    </div>
  </div>
  <UserPosts :userId="user.id" />
</template>

<script>
import UserPosts from "@/components/user/UserPosts";

export default {
  name: "UserPage",
  components : {UserPosts}
}
</script>

<script setup>
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

const route = useRoute();
const store = useStore();

const user = computed(() => {
  return store.getters.getUserById(+route.params.id);
})

onMounted(() => {
  store.dispatch("fetchUsers");
})

</script>


<style scoped lang="scss">
  @import './userPage.scss';
</style>