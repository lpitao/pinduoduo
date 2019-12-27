<template>
  <div class="container" @click="handleBannerCloseClick">
      <div class="wrapper">
          <swiper :options="swiperOptions">
              <swiper-slide class="gallary-img" v-for="img in imgs" :key="img">
                  <img :src="img">
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
      </div>
  </div>
</template>
<script>
export default {
  name:'CommonGallary',
  data(){
      return {
          swiperOptions: {
              pagination: {
                    el:'.swiper-pagination',
                    type: 'fraction'
              },
              observeParents: true,
              observer: true
          }
      }
  },
  props: {
      imgs: {
          type: Array,
          default (){
              return []
          }
      },
  },
  methods: {
    handleBannerCloseClick (){
        this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow initial
.container
    display :flex
    flex-direction :column
    justify-content :center
    z-index: 10000
    position :fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background :#000
    .wrapper
        height: 0
        width: 100%
        padding-bottom: 100%
        .gallary-img
            width: 100%
            img 
                width : 100%
        .swiper-pagination
            color: #fff;
            bottom: -1rem;
            left: 0;
            right: 0;
</style>
