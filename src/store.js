import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      count: 0
    },
    mutations: {
      // 不要在异步操作
      add(state) {
        state.count++
      },
      addN(state, step) {
        state.count += step
      },
      // addMN(state, step1, step2){
      //   state.count =state.count + step1 + step2
      // },
      sub(state) {
        state.count--
      },
      subN(state, step) {
        state.count -= step
      }
    },
    actions: {
      addAsync(context) {
        setTimeout(() => {
          context.commit('add')
        }, 1000)
      },
      addNAsync(context, step) {
        setTimeout(() => {
          context.commit('addN', step)
        }, 1000)
      },
      subNAsync(context, step) {
        setTimeout(() => {
          context.commit('subN', step)
        }, 1000)
      }
    },
    getters: {
      showNum(state) {
        return '当前count convert to => ' + state.count
      }
    }
  }
)