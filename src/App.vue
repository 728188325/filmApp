<template>
  <div class="main">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  body{
    position: relative;
  }
</style>
