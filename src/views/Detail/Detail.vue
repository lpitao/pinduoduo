<template>
  <div id="Detail">
    <div id="banner" class="goods-banner" >
        <ul class="islider-outer">
            <li class="islider-html islider-next" >
                <img src="//t00img.yangkeduo.com/goods/images/images/2019-09-19/43f7627a-63a2-4c7f-93c9-d587e2f6001b.jpg"  data-url="">
            </li>
            <li class="islider-html islider-prev">
                <img src="//t00img.yangkeduo.com/goods/images/2019-08-05/f41b8a68-8d7c-4f1d-acdc-ed54c8b12ce5.jpg" data-url="">
            </li>
        </ul>
    </div>
    <div class="_1Hli43py">
      <div class="_2NgeZQAr _2h5rjz7_">
        259人在拼单，可直接参与
        <div class="qbmmEcZl">查看更多</div>
      </div>
      <div class="_1UR8mSBJ" id="loacl-group-container">
        <div style="opacity: 1;">
          <div class="_3ezufAwN">
            <span class="_2kt39tM1" style="background-image: url(&quot;//t20img.yangkeduo.com/a/0965f051d01ab46e105dce0644584252ccd13490-1562823962?imageMogr2/thumbnail/100x&quot;);"></span>
            <div class="_1dS9L-Qc">
              <div class="_3iMjLshI">庄家三兄弟</div>
              <div class="JUHkqUeN">
                <div class="_3_Wrlz9f">还差<span class="NYTZ9d1H">1人</span>拼成</div>
                <span class="_2B3lhJL5">剩余23:18:48.6</span>
              </div>
            </div>
            <div class="_3scPuzOh o-EggeDs" data-active="before-red">去拼单</div>
          </div>
        </div>
      </div>
    </div>
    <tab-detail></tab-detail>
  </div>
</template>
<script>
import tabDetail from './tabDetail/tabDetail.vue'
export default {
  name:'Detail',
  components: {
    tabDetail
  }
}
</script>
<style lang="stylus" scoped>
#banner
    position: relative;
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
