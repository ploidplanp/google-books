import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favorites: []
    },
    mutations: {
        addFavorite(state, payload) {
            const selectedId = payload.id
            const check = state.favorites.findIndex(book => {
                // is book.id == selectedId
                return book.id == selectedId
            })
            console.log('check: ', check)
            if (check === -1) {
                // don't axist ---> push to state.favorite
                state.favorites.push(payload)
            } else {
                // axist ---> may be you want to do s'th
            }
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