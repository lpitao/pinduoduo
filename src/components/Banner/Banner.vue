<template>
  <div id="banner">
      <div id="rp-banner" class="_1p6HR1Wz">
        <ul class="islider-outer">
            <li class="islider-html islider-next">
                <img data-index="3" data-hua="yz" data-banner_id="3" data-gg_id="76413588" src="//t16img.yangkeduo.com/img_check/2019-12-10/2bb3e7b7d3bfafae96d0565a1e3dbf18.jpg?imageMogr2/format/webp/quality/50">
            </li>
            <li class="islider-html islider-prev" >
                <img data-index="1" data-hua="yz" data-banner_id="1" data-gg_id="25818092" src="//t16img.yangkeduo.com/phone_adx/fa8fcae5b857a7ea4065dc1b9af6b56e.jpg?imageMogr2/format/webp/quality/50">
            </li>
            <li class="islider-html islider-active">
                <img data-index="2" data-hua="yz" data-banner_id="2" data-gg_id="54425986" src="//t16img.yangkeduo.com/img_check/2019-12-03/a3a0aba5849c4ad11577d1f925419c73.jpg?imageMogr2/format/webp/quality/50">
            </li>
        </ul>
        <ul class="rp-islider-dot-wrap">
            <li class="rp-islider-dot" index="0"></li>
            <li class="rp-islider-dot" index="1"></li>
            <li class="rp-islider-dot active" index="2"></li>
            <li class="rp-islider-dot" index="3"></li>
            <li class="rp-islider-dot" index="4"></li>
            <li class="rp-islider-dot" index="5"></li>
            <li class="rp-islider-dot" index="6"></li>
            <li class="rp-islider-dot" index="7"></li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'Banner',
  components: {
  }
}
</script>
<style lang="stylus">
._1p6HR1Wz 
    position: relative;
    width: 100%;
    display: block;
    height: 1.4rem;
    overflow-y: hidden;
    .islider-outer
        background-color: #fff;
        height: 1.4rem;
        li
            background-size: cover;
            overflow-y: hidden;
            img 
                border: 0;
                max-width: 100%;
                width: auto;
                height: auto;
                vertical-align: top;
    .rp-islider-dot-wrap 
        width: 100%;
        height: 6px;
        margin: 0;
        padding: 0 .16rem 0 0;
        bottom: 10px;
        text-align: right;
        .rp-islider-dot
            position: relative;
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #fff;
            list-style: none;
            margin: 0 0 .06rem .06rem;
</style>
