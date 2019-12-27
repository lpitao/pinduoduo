<template>
  <div id="app">
    <router-view/>
    <foot-list></foot-list>
  </div>
</template>
<script>
import FootList from '@/components/FooterList/foot.vue'
export default {
  name:'App',
  components: {
    FootList
  }
}
</script>
<style lang="stylus">
</style>
