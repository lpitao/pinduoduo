<template>
  <div class="home">
    <head-list :city="city"></head-list>
    <banner></banner>
    <navv></navv>
    <list :list="city"></list>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadList from '@/components/Head/head.vue'
import Banner from '@/components/Banner/Banner.vue'
import Navv from '@/components/Nav/Nav.vue'
import List from '@/components/List/List.vue'
export default {
  name: 'home',
  data () {
      return {
          products: this.$store.state.products,
          city: ''
      }
  },
  components: {
    HeadList,
    Banner,
    Navv,
    List
  },
  methods: {
    minusPrice() {
        this.$store.commit('minusPrice', 2);
    },
    minusPriceAsync() {
        this.$store.dispatch('minusPriceAsync', 5); //分发actions中的minusPriceAsync这个异步函数
    },
    getCity(){
      this.axios.get('/static/mock/city.json')
        .then(this.getCityInfo)
    },
    getCityInfo (res) {
      res = res.data
      if ( res.ret && res.data ){
        const data = res.data
        this.city = data.city
      }
    }
  },
  mounted() {
    this.getCity()
  }
}
</script>
