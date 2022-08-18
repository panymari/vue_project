<template>
  <!--  <i aria-hidden="true" class="fa fa-sign-in" />-->
  <div class="header">
    <span class="logo">
      <div class="logo-circle"/>
      <span class="logo-title">Innowise group</span>
    </span>
    <div class="angleDownBlock">
      <div class="angleDownBlock-title">Recommendations</div>
      <div class="angleDownBlock-blocks">
        <div class="blocks" v-for="item in titleRecommendations" :key="titleRecommendations.id">
        {{ item.title }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Header",
  computed: mapGetters(["titleRecommendations"]),
  methods: mapActions(["fetchRecommendations"]),
  mounted() {
    this.fetchRecommendations();
  }
}
</script>

<style scoped lang="scss">
@import './header.scss';
</style>