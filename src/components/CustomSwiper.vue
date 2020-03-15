<template>
  <div>
    <div class="swiper-container custom-swiper" :class="customClass">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
export default {
  props: {
    slidesPerView: {
      type: Number,
      required: false,
      default: 3
    },
    customClass: {
      type: String,
      required: true
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const mySwiper = new Swiper('.' + this.customClass, {
      slidesPerView: this.slidesPerView,
      spaceBetween: 10
      // loop: true, // 循环模式选项
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  /* height: 140px; */
}
</style>
