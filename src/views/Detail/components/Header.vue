<template>
  <div class="head" v-show="showAbs">
      <router-link
            tag="div"
            to="/"
            class="header-abs"
            v-show="showAbs"
        ></router-link>
      <div class="header-fixed" v-show="!showAbs">
          <router-link to="/"></router-link>
          景点
      </div>
  </div>
</template>
<script>
export default {
  name:'headDetail',
  data () {
      return {
          showAbs: true
      }
  },
  methods: {
      showHead (){
          console.log(document.documentElement.scrollTop)
          const top = document.documentElement.scrollTop
          if(top > 20){
              this.showAbs = true
          } else {
              this.showAbs = false
          }
      }
  },
  mounted() {
      window.addEventListener('scroll', this.showHead)
  }
}
</script>
<style lang="stylus" scoped>
.head
    .header-abs
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        border-radius : .4rem
        background : blue
        position absolute
        boreder-radius: .4rem
    .header-fixed
        position :fixed
        overflow hidden
        width : 100%
        background : #000
        z-index:999
        top: 0
        left: 0
</style>
