<template>
  <div>
      <!-- https://mobile.yangkeduo.com/classification.html?refer_page_name=recommended&refer_page_id=10272_1577361134349_BME9YYVUW9&refer_page_sn=10272 -->
        <div class="_3_-1Ib2J" >
            <div class="_3dHPvJLc">
                <ul>
                    <li class="_3a8SKtEL" v-for="(tt,item) in title" :key=item>{{tt}}</li>
                </ul>
            </div>
        </div>
        <div class="_2YYgnWX-" ref="wrapper"> 
            <div class="_2gAiuLaZ">
                <div class="_3uVwaKe1 ">
                    <div class="_3bmLbygX">热门分类
                        <img src="//t13img.yangkeduo.com/cart/2019-12-12/709d148ccd350777b089af96c1502841.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp">
                    </div>
                </div>
                <ul class="tG8pI-I_">
                    <li class="_3I6rfovK" v-for="(img,item) in imgs" :key="item">
                        <div class="_7azxGib9">
                            <img :src=img>
                        </div>
                        <p class="_3yO67KP9">棉服</p>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>
<script>
//import Bscroll from 'better-scroll'
export default {
  name:'App',
  data(){
      return {
          imgs: [
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
              "//t00img.yangkeduo.com/goods/images/2019-10-06/ee2da744-f6bf-4050-bf07-d773b0aafdf4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
          ],
          title: [
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
              '鞋包',
          ]
      }
  },
  mounted () {
       //this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
._2YYgnWX-
    position: absolute;
    bottom: 0;
    bottom: constant(safe-area-inset-bottom);
    bottom: env(safe-area-inset-bottom);
    left: .89rem;
    top: .5rem;
    right: -1rem;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    ._2gAiuLaZ 
        position: relative;
        width: 2.86rem;
        ._3uVwaKe1 
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            height: .37rem;
            background-repeat: no-repeat;
            background-size: 2.87rem .37rem;
            position: relative;
            width: 100%;
            font-size: 0;
            ._3bmLbygX
                display: -webkit-inline-box;
                display: -webkit-inline-flex;
                display: inline-flex;
                height: .17rem;
                font-size: .15rem;
                padding-left: .18rem;
                line-height: .18rem;
                color: #151516;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                flex: 1;
                img
                    height: .17rem;
                    margin-left: .08rem;
                    line-height: 0;
                    vertical-align: middle;
        .tG8pI-I_ 
            margin-top: .09rem;
            width: 100%;
            ._3I6rfovK 
                position: relative;
                width: .95rem;
                height: .75rem;
                margin: 0 0 .16rem;
                text-align: center;
                background-color: #fff;
                float: left;
                ._7azxGib9
                    width: .56rem;
                    height: .56rem;
                    background: #fafafa;
                    margin: 0 auto .06rem;
                    img
                        width: 100%;
                        height: 100%;
._3_-1Ib2J
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: .89rem;
    overflow: hidden;
    background-color: #fafafa
    ._3dHPvJLc 
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        padding-top: .5rem;
        padding-bottom: .49rem;
        width: .99rem;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        ul li
            width: .89rem;
            position: relative;
            height: .52rem;
            overflow-x: hidden;
            color: #666;
            background-color: #fafafa;
            font-size: .15rem;
            text-align: center;
            line-height: .52rem;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50% 50%;

</style>
