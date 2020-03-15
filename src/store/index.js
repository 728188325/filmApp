import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Indicator } from 'mint-ui'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showTabbar: true, // 是否显示底部nav
    nowPlayingFilms: [], // 正在热映电影数据
    comingFilms: [], // 即将上映电影数据
    comingFilmsTotal: 0 // 即将上映电影总数目
  },
  getters: {

  },
  mutations: {
    setTabbarMutation (state, data) {
      state.showTabbar = data
    },
    getComingFilmsMutation (state, data) {
      state.comingFilmsTotal = data.total
      state.comingFilms = data.films
    },
    getNowPlayingFilmsMutation (state, data) {
      state.nowPlayingFilms = data.films
    },
    getMoreComingFilmsMutation (state, data) {
      state.comingFilmsTotal = data.total
      state.comingFilms = [...state.comingFilms, ...data.films]
    }
  },
  actions: {
    getComingFilmsAction (store, pageNum = 1) {
      const pageSize = 10
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      axios({
        url: `https://m.maizuo.com/gateway?cityId=310100&pageNum=${pageNum}&pageSize=${pageSize}&type=2&k=3304302`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1583331309485331304518","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        store.commit('getComingFilmsMutation', res.data.data)
        Indicator.close()
      })
    },
    // 第一次加载数据
    getNowPlayingFilmsAction (store, pageNum = 1) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      axios({
        url: `https://m.maizuo.com/gateway?cityId=310100&pageNum=${pageNum}&pageSize=10&type=1&k=2967413`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1583331309485331304518","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        store.commit('getNowPlayingFilmsMutation', res.data.data)
        Indicator.close()
      })
    },
    // 获取更多数据
    getMoreComingFilmsAction (store, pageNum = 1) {
      axios({
        url: `https://m.maizuo.com/gateway?cityId=310100&pageNum=${pageNum}&pageSize=10&type=2&k=3304302`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1583331309485331304518","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        store.commit('getMoreComingFilmsMutation', res.data.data)
      })
    }
  }
})

export default store
