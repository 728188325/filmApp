<template>
    <ul class="nav" :class="{'show':showTabbar}" ref="nav">
      <router-link tag="li" to="/film" activeClass="active">
        <span class="custom cusdianying"></span>电影
      </router-link>
      <router-link tag="li" to="/cinema" activeClass="active">
        <span class="custom cusyingyuan"></span>影院
      </router-link>
      <router-link tag="li" to="/center" activeClass="active">
        <span class="custom cushome"></span>我的
      </router-link>
    </ul>
</template>

<script>
import Bus from '@/bus'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isShow: '我是多余的'
    }
  },
  computed: {
    ...mapState(['showTabbar'])
  },
  mounted () {
    // 事件总线控制底部显隐
    Bus.$on('hideFoot', () => {
      this.$refs.nav.style.display = 'none'
    })
    Bus.$on('showFoot', () => {
      this.$refs.nav.style.display = 'flex'
    })
  }
}
</script>

<style lang="scss" scoped>

  .nav{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    list-style: none;
    border-top: 1px solid #ddd;
    background: #fff;
    display: none;
    &.show{
      display: flex;
    }
    li{
      flex: 1;
      height: 50px;
      text-align: center;
      &.active{
        color: rgb(255, 102, 0);
      }
      span{
        display: block;
        font-size: 26px;
      }
    }
  }
</style>
