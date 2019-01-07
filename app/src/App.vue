<template>
  <div id="app">
    <router-view/>
    <Footer v-show="this.$route.meta.flag"/>
  </div>
</template>

<script>
import Footer from './components/footer'
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style lang="scss" scoped>
  #app{
    width: 100%;
    height: 100%;
  }

</style>

