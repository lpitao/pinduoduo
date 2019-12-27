<template>
  <div id="Detail">
    <head-detail></head-detail>
    <div id="banner" class="goods-banner" @click="handleBannerClick">
        <ul class="islider-outer">
            <li class="islider-html islider-next" >
                <img src="//t00img.yangkeduo.com/goods/images/images/2019-09-19/43f7627a-63a2-4c7f-93c9-d587e2f6001b.jpg">
            </li>
            <li class="islider-html islider-prev">
                <img src="//t00img.yangkeduo.com/goods/images/2019-08-05/f41b8a68-8d7c-4f1d-acdc-ed54c8b12ce5.jpg">
            </li>
        </ul>
    </div>
    <fade>
       <common-gallary :imgs = "gallaryImgs" v-show = "showGallary" @close="handleGallaryClose"></common-gallary>
    </fade>
    <tab-detail></tab-detail>
    <list-detail :list="list"></list-detail>
  </div>
</template>
<script>
import tabDetail from './components/tabDetail.vue'
import headDetail from './components/Header.vue'
import listDetail from './components/List.vue'
import CommonGallary from '@/common/gallary/Gallary.vue'
import Fade from '@/common/fade/Fade.vue'
export default {
  name:'Detail',
  data () {
    return {
      showGallary: false,
      gallaryImgs:[
          "//t00img.yangkeduo.com/goods/images/2019-08-05/f41b8a68-8d7c-4f1d-acdc-ed54c8b12ce5.jpg",
          "//t00img.yangkeduo.com/goods/images/2019-08-05/f41b8a68-8d7c-4f1d-acdc-ed54c8b12ce5.jpg"
      ],
      list: [
        {
          title: 'hihihi周五',
          children: [{
            title: 'hihi吃寿司',
            children:[{
              title: '生啤'
            }]
          },{
            title: 'hihi吃lele',
            children:[{
              title: 'coffe'
            }] 
          }]
        },
        {
          title: 'hihihi周er',
          children: {
            title: 'hihi吃食堂'
          }
        }
      ]
    }
  },
  methods: {
      handleBannerClick () {
          this.showGallary = true
      },
      handleGallaryClose() {
          this.showGallary = false
      }
  },
  components: {
    tabDetail,
    CommonGallary,
    headDetail,
    listDetail,
    Fade
  }
}
</script>
<style lang="stylus" scoped>
#banner
    position: relative;
    height: 2rem
    .islider-outer
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        li
            list-style: none;
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            display: -webkit-flex;
            display: flex;
            display: -moz-box;
            display: -webkit-box;
            display: box;
            -webkit-box-pack: center;
            box-pack: center;
            -webkit-box-align: center;
            box-align: center;
            img
                border: 0;
                max-width: 100%;
                width: auto;
                height: auto;
                vertical-align: top;
._1UR8mSBJ
    max-height: 1.2rem;
    overflow: hidden;
    padding: 0 0 0 .12rem;
    width: 100%;
    ._3ezufAwN 
      position: relative;
      width: 100%;
      height: .6rem;
      padding: .07rem 0;
      border-bottom: 1px solid #f2f2f2;
      ._2kt39tM1 
        position: relative;
        top: .05rem;
        display: block;
        float: left;
        width: .36rem;
        height: .36rem;
        margin-right: .08rem;
        border-radius: 100%;
        border: 1px solid #fff;
        background-size: 100%;
      ._1dS9L-Qc
        position: relative;
        width: 2.31rem;
        height: .45rem;
        float: left;
        padding: .06rem 0;
        3iMjLshI
          position: absolute;
          left: 0;
          top: 0;
          width: 1.25rem;
          font-size: .15rem;
          color: #151516;
          line-height: .46rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        3iMjLshI
          position: absolute;
          left: 0;
          top: 0;
          width: 1.25rem;
          font-size: .15rem;
          color: #151516;
          line-height: .46rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      ._3scPuzOh
        position: absolute;
        width: .68rem;
        height: .3rem;
        line-height: .3rem;
        color: #e02e24;
        top: .15rem;
        right: 0;
        font-size: .14rem;
        text-align: center;
        border-radius: .04rem;
        margin-right: .12rem;
        box-sizing: content-box;
        font-family: PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;
</style>
