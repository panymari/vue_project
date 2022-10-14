<template>
    <Header />
  <router-view />
</template>

<script>
import Header from "@/components/header/Header";
import Users from "@/components/user/Users";

export default {
  name: 'App',
  components: { Header, Users }
}
</script>

