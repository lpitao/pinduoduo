<template>
  <div class="home">
  <banner></banner>
  <navv></navv>
  <list ></list>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner/Banner.vue'
import Navv from '@/components/Nav/Nav.vue'
import List from '@/components/List/List.vue'
export default {
  name: 'home',
  components: {
    Banner,
    Navv,
    List
  },
  methods:{
  }
}
</script>
