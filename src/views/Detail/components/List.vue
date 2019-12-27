<template>
  <div>
        <div 
            class="item"
            v-for="(item, index) of list"
            :key="index"
        >
            <div class="item-title"> {{item.title}}</div>
            <div v-if="item.children">
                <list-detail :list="item.children"></list-detail>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  name:'listDetail',
  props: {
      list: Array
  }
}
</script>
<style lang="stylus">
</style>
