<template>
  <div id="banner">
        <div class="swiper1">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <img src="//t16img.yangkeduo.com/img_check/2019-12-10/2bb3e7b7d3bfafae96d0565a1e3dbf18.jpg?imageMogr2/format/webp/quality/50">
                </swiper-slide>
                <swiper-slide>
                    <img src="//t16img.yangkeduo.com/phone_adx/fa8fcae5b857a7ea4065dc1b9af6b56e.jpg?imageMogr2/format/webp/quality/50">
                </swiper-slide>
                <swiper-slide>
                    <img src="//t16img.yangkeduo.com/img_check/2019-12-03/a3a0aba5849c4ad11577d1f925419c73.jpg?imageMogr2/format/webp/quality/50">
                </swiper-slide>
                <swiper-slide>I'm Slide 4</swiper-slide>
                <swiper-slide>I'm Slide 5</swiper-slide>
                <swiper-slide>I'm Slide 6</swiper-slide>
                <swiper-slide>I'm Slide 7</swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
        </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'Banner',
  components: {
        swiper,
        swiperSlide
  },
  data() {
        return {
            swiperOption: {
                    height:300,
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
}
</script>
<style lang="stylus">
.swiper1 
    position: relative;
    width: 100%;
    display: block;
    height: 1.4rem;
    overflow-y: hidden;
    .swiper-container
        background-color: #fff;
        height: 1.4rem;
        swiper-slide
            background-size: cover;
            overflow-y: hidden;
            img 
                border: 0;
                max-width: 100%;
                width: auto;
                height: auto;
                vertical-align: top;
        .swiper-pagination
            width: 100%;
            height: 6px;
            margin: 0;
            padding: 0 .16rem 0 0;
            bottom: 10px;
            text-align: right;
            .swiper-pagination-bullet
                position: relative;
                display: inline-block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #fff;
                list-style: none;
                margin: 0 0 .06rem .06rem;
</style>
