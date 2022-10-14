<template>
  <div class="userIcon">
    <i class="fa fa-user-circle fa-4x" />
  </div>
  <div>
    <div class="name">{{user.name}}</div>
    <div class="userName">@{{user.username}}</div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object
  }
}
</script>

<style scoped lang="scss">
@import './user.scss';
</style>