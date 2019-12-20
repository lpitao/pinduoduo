<template>
  <div id="app">
    <head-list></head-list>
    <router-view/>
    <foot-list></foot-list>
  </div>
</template>
<script>
import HeadList from '@/components/Head/head.vue'
import FootList from '@/components/FooterList/foot.vue'
export default {
  name:'App',
  components: {
    HeadList,
    FootList
  }
}
</script>
<style lang="stylus" scoped>
@import '~/styles/reset.css';
</style>
