<template>
    <div>
        <mt-index-list>
            <mt-index-section :index="list.letter" v-for="list in cityList" :key="list.letter">
                <div v-for="item in list.list" :key="item.cityId" @click="selectCity(item)">
                    <mt-cell :title="item.name"></mt-cell>
                </div>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { IndexList, IndexSection } from 'mint-ui'
import axios from 'axios'
export default {
  data () {
    return {
      cityList: []
    }
  },
  beforeMount () {
    this.$store.commit('setTabbarMutation', false)
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?k=576639',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1583331309485331304518","bc":"310100"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then((res) => {
      console.log(res.data.data.cities)
      this.cityList = this.cityFilter(res.data.data.cities)
    })
  },
  methods: {
    cityFilter (data) {
      const result = []
      const letters = []
      for (let i = 65; i < 91; i++) {
        const letter = String.fromCharCode(i).toLowerCase()
        letters.push(letter)
      }
      for (const item of letters) {
        const v = data.filter((city) => {
          return city.pinyin.substring(0, 1) === item
        })
        result.push({
          letter: item,
          list: v
        })
      }
      console.log(result)
      return result
    },
    selectCity (data) {
      console.log(data, '选择城市')
      localStorage.setItem('city', JSON.stringify(data))
      this.$router.push('/film')
    }
  },
  beforeDestroy () {
    this.$store.commit('setTabbarMutation', true)
  }
}
</script>
