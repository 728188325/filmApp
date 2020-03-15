<template>
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Swiper, SwipeItem } from 'mint-ui'
export default {
  beforeRouteEnter (to, from, next) {
    console.log(to.path, from.path, '路由进来前')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.path, from.path, '路由改变前') // 动态路由会调用
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log(to.path, from.path, '路由退出前')
    next()
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 150px;
}
</style>
