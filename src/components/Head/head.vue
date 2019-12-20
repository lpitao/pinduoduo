<template>
  <div id="head">
        <div class="header clearfix">    
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
        </div>
  </div>
</template>
<script>
export default {
  name:'Head',
  components: {
  }
}
</script>
<style lang="stylus">
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
    .download-login 
        display: block;
        float: right;
        margin-top: .21333333rem;
        margin-right: .37333333rem;
        width: 3.44rem;
        height: .85333333rem;
        line-height: .85333333rem;
        background: rgba(242,13,13,.06);
        border-radius: .42666667rem
        .download-login a 
            float: left;
            font-weight: 700;
            font-size: .32rem;
            color: #F01414;
            text-align: center
            .download-btn 
                width: 2.02666667rem
            .login-btn
                width: 1.38666667rem

</style>
