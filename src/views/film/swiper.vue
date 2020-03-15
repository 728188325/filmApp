<template>
    <div>
        <div class="swiper-container film-swiper">
          <div class="swiper-wrapper">
            <slot></slot>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
      </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
export default {
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const mySwiper = new Swiper('.film-swiper', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
    width: 100%;
}
</style>
