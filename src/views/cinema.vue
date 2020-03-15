<template>
  <div class="panel" ref="wrapper">
    <ul>
      <li v-for="list in cinemas" :key="list.cinemaId">
        {{list.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      cinemas: []
    }
  },
  mounted () {
    console.log(this, document.documentElement.offsetHeight, this.$refs.wrapper.style.height)
    this.$refs.wrapper.style.height = document.documentElement.offsetHeight - 50 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=7841643',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1583331309485331304518"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      console.log(res.data)
      this.cinemas = res.data.data.cinemas
      this.$nextTick(() => {
        // eslint-disable-next-line no-unused-vars
        const scroll = new BScroll('.panel', {
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
    .panel{
        padding: 10px 15px 10px;
        overflow: hidden;
        box-sizing: border-box;
        ul{
            list-style: none;
            li{
                margin-bottom: 10px;
            }
        }
    }
</style>
