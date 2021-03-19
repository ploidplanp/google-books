import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favorites: []
    },
    mutations: {
        addFavorite(state, payload) {
            console.log('fav: ', state.favorites)
            console.log('payload: ', payload)
            // if(!state.favorites.some(data => data.id === payload.id)){
            //     // don't exists ---> push to favaorites
            //     // state.favorites.push(payload)
            //     console.log('payload: ', payload)
            //     console.log('test: ', state.favorites.push({...payload}))
            //     // state.favorites.push({...payload})
            // } else {
            //     // exist
            // }

            // const new_fav = state.favorites.find(data => data.id === payload.id)
            // console.log('new fav: ', new_fav)
            // if(new_fav){
            //     console.log(state.favorites.push(payload))
            // }
        },
        removeFavorite(state, payload) {
            state.favorites.splice(payload, 1)
        }
    },
    actions: {
        addFavorite({commit}, payload) {
            commit('addFavorite', payload)
        },
        removeFavorite({commit}, payload) {
            commit('removeFavorite', payload)
        }
    },
    modules: {

    }
})