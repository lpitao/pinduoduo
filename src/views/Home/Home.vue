<template>
  <div class="home">
  <banner></banner>
  <navv></navv>
  <list ></list>
   <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
          <li v-for="product in products">
            <span class="name">{{ product.name }}</span>
            <span class="price">${{ product.price }}</span>
          </li>
           <button @click="minusPrice">减少价格</button>
            <button @click="minusPriceAsync">异步减少价格</button> //添加按钮
        </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner/Banner.vue'
import Navv from '@/components/Nav/Nav.vue'
import List from '@/components/List/List.vue'
export default {
  name: 'home',
  data () {
      return {
          products: this.$store.state.products
      }
  },
  components: {
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
    }
  }
}
</script>
