<template>
  <div id="app">
    <router-view/>
    <Footer v-show="this.$route.meta.flag"/>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Footer
  },
};
</script>

<style lang="sass" scoped>

</style>

