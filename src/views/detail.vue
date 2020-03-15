<template>
    <div v-if="detailData">
        <img :src="detailData.poster" alt="" class="banner">
        <h2 class="name">{{detailData.name}}</h2>
        <p class="synopsis">{{detailData.synopsis}}</p>
        <div class="actors">
          <div class="actors-title">演职人员</div>
          <CustomSwiper :slidesPerView="4.4" customClass="custom1">
              <div class="swiper-slide" v-for="item in detailData.actors" :key="item.name">
                <div class="pic-box"><img :src="item.avatarAddress" alt=""></div>
                <span>{{item.name}}</span>
              </div>
          </CustomSwiper>
        </div>
        <div class="actors">
          <div class="actors-title">剧照</div>
          <CustomSwiper :slidesPerView="2.5" customClass="custom2">
              <div class="swiper-slide" v-for="(item, key) in detailData.photos" :key="key">
                <div class="pic-box"><img :src="item" alt=""></div>
              </div>
          </CustomSwiper>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CustomSwiper from '@/components/CustomSwiper'
import Bus from '@/bus'
export default {
  components: { CustomSwiper },
  data () {
    return {
      detailData: null
    }
  },
  beforeMount () {
    Bus.$emit('hideFoot')
  },
  mounted () {
    console.log(this.$route.params, '打印路由参数')
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=5246948`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1583331309485331304518"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      console.log(res.data)
      /*  this.$nextTick(() => {
        this.detailData = res.data.data.film
      }) */
      this.detailData = res.data.data.film
    })
  },
  beforeDestroy () {
    Bus.$emit('showFoot')
    Bus.$off('showFoot')
    Bus.$off('hideFoot')
  }
}
</script>

<style lang="scss" scoped>
  .banner{
    display: block;
    width: 100%;
  }
  .name{
    padding: 15px 10px 0;
  }
  .synopsis{
    padding: 10px;
    border-bottom: 10px solid #f6f6f6;
  }
  .actors{
    padding: 10px;
    border-bottom: 10px solid #f6f6f6;
    .actors-title{
      padding-bottom: 10px;
    }
  }
  .swiper-slide{
    .pic-box{
      width: 100%;
      height: 85px;
      margin-bottom: 8px;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
  }
</style>
