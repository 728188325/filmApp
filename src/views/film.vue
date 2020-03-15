<template>
    <div>
      <div class="head" @click="selectCity">
        <span>{{myCity}}</span>
      </div>
      <Swiper :key="bannerList.length" ref="swipe" :class="{'md50': navActive}">
        <div class="swiper-slide" v-for="item in bannerList" :key="item.bannerId">
          <img :src="item.imgUrl" alt="">
        </div>
      </Swiper>
      <Navbar :class="{'nav-active': navActive}"></Navbar>
      <router-view></router-view>
    </div>
</template>

<script>
import Swiper from '@/views/film/swiper'
import Navbar from '@/components/Navbar'
import axios from 'axios'
export default {
  components: { Navbar, Swiper },
  data () {
    return {
      bannerList: [],
      navActive: false
    }
  },
  computed: {
    myCity () {
      const cityObj = JSON.parse(localStorage.getItem('city'))
      const name = cityObj ? cityObj.name : '选择城市'
      return name
    }
  },
  mounted () {
    window.onscroll = this.handleScroll
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=310100&k=8982570',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1583331309485331304518","bc":"310100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then((res) => {
      console.log(res.data)
      this.bannerList = res.data.data
    })
  },
  methods: {
    handleScroll () {
      console.log('触发滚动条事件')
      if (document.documentElement.scrollTop > this.$refs.swipe.$el.offsetHeight) {
        this.navActive = true
      } else {
        this.navActive = false
      }
    },
    selectCity () {
      this.$router.push('/city')
    }
  },
  beforeDestroy () {
    window.onscroll = null
  }
}
</script>

<style lang="scss" scoped>
.head{
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 15px;
  background: rgba(0,0,0,.35);
  border-radius: 20px;
  z-index: 999;
  span{
    color: #fff;
  }
}
.swiper-slide{
  img{
    width: 100%;
  }
}
.md50{
  margin-bottom: 50px;
}
.nav-active{
  position: fixed;
  top: 0;
}
</style>
