import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        defaultPage:'home',
    },
    getters: {

    },
    mutations:{
        setDefaultPage(state, pageName) {
            state.defaultPage = pageName;
        },
    },
    actions:{
        
    }
})