<template>
  <!--  <i aria-hidden="true" class="fa fa-sign-in" />-->
  <div class="header">
    <span class="logo">
      <div class="logo-circle"/>
      <span class="logo-title">Innowise group</span>
    </span>
    <SearchBar />
    <div class="angleDownBlock">
      <div class="angleDownBlock-title">Recommendations</div>
      <div class="angleDownBlock-blocks">
        <div class="blocks" v-for="item in getTitleRecommendations" :key="item.id">
        {{ item.title }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SearchBar from "@/ui/SearchBar";

export default {
  name: "Header",
  components: {SearchBar}
}
</script>

<script setup>
import {useStore} from 'vuex';
import {computed, onMounted} from "vue";

const store = useStore();

const getTitleRecommendations = computed(() => {
  return store.getters.getTitleRecommendations
})

onMounted(() => {
  store.dispatch("fetchRecommendations");
})
</script>

<style scoped lang="scss">
@import './header.scss';
</style>