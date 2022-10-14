<template>
  <AddPost :posts="posts" :userId="userId" />
  <div class="user-posts" v-for="post in posts" :key="post.id">
    <div class="user-posts-item">
      <div class="user-posts-item-title">{{ post.title }}</div>
      <div class="user-posts-item-body">{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
import AddPost from "@/ui/AddPost";

export default {
  name: "UserPosts",
  props: {
    userId: Number,
  },
  components: {AddPost}
}
</script>

<script setup>
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

const store = useStore();

const props = defineProps({
  userId: Number,
  posts: Object
})

const posts = computed(() => {
  return store.getters.getPostsByUserId(props.userId);
})

onMounted(() => {
  store.dispatch("fetchPosts");
})

</script>

<style scoped lang="scss">
  @import './userPosts.scss';
</style>