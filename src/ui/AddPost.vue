<template>
  <form class="user-form" @submit.prevent="addPost">
    <input
        class="user-input"
        id="title"
        v-model="title"
        placeholder="Enter the title"
        type="text"
    />
    <textarea
        class="user-textarea"
        id="body"
        v-model="body"
        placeholder="Enter the body"
    />
    <input type="submit" value="Add post" class="user-submit-button" />
  </form>
</template>

<script>
export default {
  name: "AddPost",
  props: {
    userId: Number,
    posts: Object
  },
}
</script>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useStore} from "vuex";

const store = useStore();

const props = defineProps({
  userId: Number,
  posts: Object
})

const title = ref('');
const body = ref('');


const addPost = () => {
  if (title.value.trim() === '' || body.value.trim() === '') {
    return
  }

  const post = {
    userId: props.userId,
    title: title.value,
    body: body.value,
  };

  axios.post('https://jsonplaceholder.typicode.com/posts', post).then((response) => {
    const userPostsCopy = [response.data, ...props.posts];
    store.commit('updatePosts', userPostsCopy);
  });

  title.value = "";
  body.value = "";
};

onMounted(() => {
  store.dispatch("fetchPosts");
})
</script>

<style scoped lang="scss">
  @import './addPost';
</style>