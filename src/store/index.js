import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const store =  new Vuex.Store({
    state:{
        userInfo:'',
    },
    mutations:{
        'GET_USERINFO'(state,payload){
            state.userInfo = payload
            state.token =payload.token
        },
        'DEL_USERINFO'(state,payload){
            state.userInfo = ''
            state.token =''
        }
    },
    plugins: [
        createPersistedState({
          storage: {
            getItem: key => sessionStorage.getItem(key),
            setItem: (key, value) =>
              sessionStorage.setItem(key, value),
            removeItem: key => sessionStorage.removeItem(key),
          },
        }),
      ],
})
export default store