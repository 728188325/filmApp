<template>
    <div>
        <ul>
            <li v-for="item in nowPlayingFilms" :key="item.filmId" @click="handleClick(item.filmId)" class="item">
              <h2>{{item.name}}</h2>
              <img :src="item.poster" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // playFilms: []
    }
  },
  computed: {
    ...mapState(['nowPlayingFilms'])
  },
  mounted () {
    // 如果没有缓存数据则请求正在热映电影数据
    if (this.nowPlayingFilms.length === 0) {
      this.$store.dispatch('getNowPlayingFilmsAction')
    }
  },
  methods: {
    handleClick (id) {
      // this.$router.push(`/detail/${id}`)
      this.$router.push({
        name: 'customDetail',
        params: { id: id, title: '这里多传一个参哈哈' }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 item{
   margin-bottom: 5px;
 }
</style>
