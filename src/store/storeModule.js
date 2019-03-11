export default {
  namespaced: true,
  state: {
    alertTip: '',
    alertShow: false,
    entAllList: [],
    demo_serviceData: {}
  },
  mutations: {
    changeAlertTip(state, payload) {
      state.alertTip = payload
    },
    changeAlertShow(state, payload) {
      state.alertShow = payload
    },
    setEntAllList(state, payload) {
      state.entAllList = payload
    },
    setDemoServiceData(state, payload) {
      state.demo_serviceData = { ...state.demo_serviceData, ...payload }
    }
  }
}
