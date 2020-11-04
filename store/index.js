export const state = () => ({
  Dataid: 1,
  data: [],
  massage01: []
})

export const mutations = {
  increment (state) {
    state.Dataid++
  },
  regis (state, arrayData) {
    state.data.push(arrayData)
  },
  addclick (state, arrayMassage) {
    state.massage01 = arrayMassage
  }
}
