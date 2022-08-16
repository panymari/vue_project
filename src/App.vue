<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([]);
const name = ref('');

const inputContent = ref('');
const inputCategory = ref(null);

computed(() => todos.value.sort((a, b) => {
  return b.createdAt - a.createdAt
}));
const addTodo = () => {
  if (inputContent.value.trim() === '' || inputCategory.value === null) {
    return
  }

  todos.value.push({
    content: inputContent.value,
    category: inputCategory.value,
    done: false,
    createdAt: new Date().getTime()
  });
};

watch(todos, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal));
}, { deep: true });

watch(name, (newVal) => {
  localStorage.setItem('name', newVal);
});

onMounted(() => {
  name.value = localStorage.getItem('name') || '';
  todos.value = JSON.parse(localStorage.getItem('todos')) || [];
});
</script>

<template>
  <main class="class">
    <section class="greeting">
      <h2 class="title">
        What's up, <input type="text" placeholder="Name here" v-model="name" />
      </h2>
    </section>

    <section class="create-todo">
      <h3>Create a todo</h3>

      <form @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <input
            type="text"
            placeholder="e.g. make a video"
            v-model="inputContent" />
        <h4>Pick a category</h4>
        <div class="options">
          <label>
            <input
                type="radio"
                name="category"
                value="businessman"
                v-model="inputCategory" />
            <span class="bubble business"></span>
            <div>Business</div>
          </label>
          <label>
            <input
                type="radio"
                name="category"
                value="personal"
                v-model="inputCategory" />
            <span class="bubble personal"></span>
            <div>Personal</div>
          </label>
        </div>
        <input type="submit" value="Add todo">
      </form>
    </section>

    <section class="todo-list"></section>
  </main>
</template>
