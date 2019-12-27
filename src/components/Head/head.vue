<template>
  <div id="head">
        <div class="jXkdP2Qa">
          <div class="_24MmDY0f">
            <div class="_1G_ORm8K">
              <input class="_1ppIkQ1o" v-model="keyword"/>
              <span>华为软手机壳</span>
            </div>
          </div>
          <div class="search-content">
            <ul>
              <li v-for="item of list" :key="item">
                {{item.name}}
              </li>
            </ul>
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
  </div>
</template>
<script>
export default {
  name:'Head',
  data(){
    return {
      keyword: '',
      timer: null,
      list:
    }
  },
  props: {
    city: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for(let i in this.city){
          this.city[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
              result.push(value)
            }
          });
        }
        this.list = result
      }, 100);
    }
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
          .search-content
            overflow :hidden
            position:absolute
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
</style>
