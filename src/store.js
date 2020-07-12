import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    setLocation(state,data){
      if(data){
        console.log(data);
        if(data.type=='open'){
          state.location.zdata[data.idx].on='on';
        }else{
          state.location.zdata[data.idx].on='';
          console.log(state.location);
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
