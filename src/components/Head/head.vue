<template>
  <div id="head">
        <div>{{Name}}</div>
        <div class="jXkdP2Qa">
          <div class="_24MmDY0f">
            <div class="_1G_ORm8K">
              <span class="_1ppIkQ1o"></span>
              <span>华为软手机壳</span>
            </div>
          </div>
        </div>
        <div class="nav-bar-container">
          <ul class="nav-bar-content">
            <li class="nav-bar-item">
              <span class="nbi-selected" style="color:#e02e24;border-color:#e02e24">热门</span>
            </li>
            <li class="nav-bar-item">
              <span class="" style="color:#444444;border-color:#444444">女装</span>
            </li>
            <li class="nav-bar-item">
                  <span class="" style="color:#444444;border-color:#444444">鞋包</span>
            </li>
            <li class="nav-bar-item">
              <span class="" style="color:#444444;border-color:#444444">男装</span>
            </li>
            <li class="nav-bar-item">
              <span class="" style="color:#444444;border-color:#444444">食品</span>
            </li>
            <li class="nav-bar-item">
              <span class="" style="color:#444444;border-color:#444444">母婴</span>
            </li>
            <li class="nav-bar-item">
              <span class="" style="color:#444444;border-color:#444444">手机</span>
            </li>
            <li class="nav-bar-item">
              <span class="" style="color:#444444;border-color:#444444">百货</span>
            </li>
            <li class="nav-bar-item">
              <span class="" style="color:#444444;border-color:#444444">内衣</span>
            </li>
          </ul>
        </div>
        <!-- <div class="header clearfix">    
            <a href="https://m.imooc.com" class="logo"><img src="https://m.imooc.com/static/wap/static/common/img/logo2.png"></a> 
            <div id="wap_global_banner" class="adver-con"></div>
            <a href="https://www.imooc.com/m/web/user/usercenter.html" class="header-avator r js-header-avator"><img src="//img4.mukewang.com/57cc10f70001d20901000100-370-370.jpg"></a>
            <i class="imwap-search index-search js-index-search"></i>
            <a id="js-appload" href="Javascript:;" class="app-load"><span>下载APP</span></a>
            <form class="search-box clearfix js-search-box" style=" display: none;" action="https://m.imooc.com/search/">
                <div class="search-input">
                    <input type="text" class="search js-search" name="words" value="" placeholder="请输入搜索关键词">
                    <div class="search-action">
                        <a href="javascript:void(0);" class="imwap-close js-clear" style="display: none;"></a>
                        <button class="imwap-search"></button>
                    </div>
                </div>
                <a href="javascript:void(0);" class="r cancel js-cancel">取消</a>
            </form>
        </div> -->
  </div>
</template>
<script>
export default {
  name:'Head',
  data(){
    return {
      Name : this.$store.state.hihiName
    }
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>

#head
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 9999;
    .jXkdP2Qa 
        width: 3.75rem;
        overflow: hidden;
        position: relative;
        padding: .06rem .14rem;
        background-color: #fff;
        background-size: 100% .5rem;
        background-repeat: no-repeat;
        ._24MmDY0f 
          text-align: center;
          border-radius: .08rem;
          background-color: #ededed;
          height: .38rem;
          color: #9c9c9c;
          font-size: .16rem;
          ._1G_ORm8K 
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            height: .38rem;
            overflow: hidden;
            position: relative;
            ._1ppIkQ1o
              margin-right: .07rem;
              -webkit-transform: translateY(-1px);
              transform: translateY(-1px);
    .nav-bar-container
        position: relative;
        max-width: 768px;
        height: .42rem;
        width: 100%;
        overflow: hidden;
        .nav-bar-content
          position: relative;
          height: .51rem;
          font-size: .16rem;
          color: #333;
          text-align: center;
          white-space: nowrap;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 0 .14rem;
          -webkit-overflow-scrolling: touch;
          .nav-bar-item 
            height: .42rem;
            display: inline-block;
            margin-left: .2rem;
            line-height: .42rem;
            text-align: center;
            .nav-bar-container .nbi-selected
              border-bottom: 2px solid #e02e24;
              color: #e02e24;
              height: .42rem;
              display: inline-block;
              position: relative;
              font-weight: 700;
/*
.header
    width: 100%;
    height: 1.49333333rem;
    padding-left: .37333333rem;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 99999;
    box-sizing: border-box;
    box-shadow: 0 2px 2px 0 rgba(28,31,33,.1)
    .logo 
        float: left;
        margin-top: .32rem;
        width: 2.18666667rem;
        height: .64rem;
        img
            width: 100%;
    .header-avator
        margin-top: .26666667rem;
        margin-right: .37333333rem;
        width: .74666667rem;
        height: .74666667rem;
        img
            width: 100%;
            height: 100%;
            border-radius: 50%;
    .index-search 
        float: right;
        margin-right: .10666667rem;
        width: 1.06666667rem;
        height: 1.28rem;
        line-height: 1.28rem;
        font-size: .64rem;
        color: #B7BBBF;
        text-align: center;
    .app-load 
        float: right;
        margin-top: .32rem;
        margin-right: .10666667rem;
        width: 2.34666667rem;
        height: .85333333rem;
        line-height: .85333333rem;
        background: rgba(240,20,20,.05);
        border-radius: .42666667rem;
        font-weight: 700;
        font-size: .37333333rem;
        color: #F01414;
        text-align: center;
*/
</style>
