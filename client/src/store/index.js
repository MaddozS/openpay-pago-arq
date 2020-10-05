import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentFormInfo: {},
    userId: '',
    device_session_id: {},
    payment_method_token: '',
  },
  mutations: {
    setFormData(state, payload){
      state.currentFormInfo = payload
    },
    setUserId(state, payload){
      state.userId = payload
    },
    setSessionId(state, payload){
      state.device_session_id = payload
    },
    setPaymentMethodToken(state, payload){
      state.payment_method_token = payload
    },
  },
  actions: {
    setFormData(context, id) {
      context.commit('setFormData', id)
    },
    setUserId(context, payload){
      context.commit('setUserId', payload)
    },
    setSessionId(context, payload){
      context.commit('setSessionId', payload)
    },
    setPaymentMethodToken(context, payload){
      context.commit('setPaymentMethodToken', payload)
    },
  },
  modules:{},
  getters:{
    getFormData: state => state.currentFormInfo,
    getUserId: state => state.userId,
    getSessionId: state => state.device_session_id,
    getPaymentMethodToken: state => state.payment_method_token
  }
})