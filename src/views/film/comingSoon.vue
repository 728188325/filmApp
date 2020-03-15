<template>
    <div>
        <ul v-infinite-scroll="loadMore"
          infinite-scroll-distance="600">
            <li v-for="item in comingFilms" :key="item.filmId" class="item" @click="handleClick(item.filmId,item.isPresale)">
                <h2>{{item.name}}</h2>
                <img :src="item.poster" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { InfiniteScroll, MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      pageNum: 1
      // comingFilms: []
    }
  },
  computed: {
    ...mapState(['comingFilms', 'comingFilmsTotal'])
  },
  mounted () {
    // 如果没有缓存数据则请求即将上映电影数据
    if (this.comingFilms.length === 0) {
      this.$store.dispatch('getComingFilmsAction')
    }
  },
  methods: {
    handleClick (id, isPresale) {
      if (!isPresale) {
        MessageBox({
          title: '',
          message: '该影片目前没有排期，到首页看其他电影吧?',
          showCancelButton: true,
          confirmButtonText: '同意',
          cancelButtonText: '拒绝'
        }).then((confirm) => {
          if (confirm === 'confirm') {
            this.$router.push('/film/nowPlay')
          }
        })
      }
      this.$router.push(`/detail/${id}`)
    },
    loadMore () {
      if (this.comingFilms.length < this.comingFilmsTotal) {
        console.log(this.pageNum)
        this.pageNum++
        // 请求更多数据
        this.$store.dispatch('getMoreComingFilmsAction', this.pageNum)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .item{
        margin-bottom: 20px;
    }
</style>
