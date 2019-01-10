<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
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

