<template>
  <div class="foot">
      <router-link to="/">Home</router-link> |
      <router-link to="/">my</router-link> |
  </div>
</template>
<script>
export default {
    name: 'foot'
}
</script>
<style lang="stylus">
.foot
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  max-width: 640px;
  background: #fdfdfd;
  border-top: .005rem solid #ededed;
  z-index: 10;
  height: .49rem;
  display: -webkit-box;
  display: flex;
  display: -webkit-flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  -webkit-align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-flex-direction: row;
  .item
    width: 50%;
    font-size: .1rem;
    line-height: .1rem;
    text-align: center;
    color: #6a6a6a;
    &.active
      color: #e02e24;
    
</style>
