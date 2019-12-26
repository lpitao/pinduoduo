<template>
  <div class="head" v-show="showAbs">
      <router-link
            tag="div"
            to="/"
            class="header-abs"
            v-show="showAbs"
        ></router-link>
      <div class="header-fixed">
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
          const top = document.documentElement.scrollTop
          if(top > 60){
              this.showAbs = false
          } else {
              this.showAbs = true
          }
      }
  },
  activated() {
      window.addEventListener('scroll', this.showHead)
  }
}
</script>
<style lang="stylus" scoped>
.head
    background : #000
    opacity : .3
    .header-abs
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        border-radius : .4rem
        background : blue
</style>
