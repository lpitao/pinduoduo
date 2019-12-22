<template>
  <div id="Detail">
    <div id="banner" class="goods-banner" >
        <ul class="islider-outer" style="cursor: pointer;">
            <li class="islider-html islider-next" >
                <img src="//t00img.yangkeduo.com/goods/images/images/2019-09-19/43f7627a-63a2-4c7f-93c9-d587e2f6001b.jpg"  data-url="">
            </li>
            <li class="islider-html islider-prev">
                <img src="//t00img.yangkeduo.com/goods/images/2019-08-05/f41b8a68-8d7c-4f1d-acdc-ed54c8b12ce5.jpg" data-url="">
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'Detail',
  components: {
  }
}
</script>
<style lang="stylus">
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

</style>
