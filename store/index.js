export const state = () => ({
  Dataid: 1,
  data: []
})

export const mutations = {
  increment (state) {
    state.Dataid++
  },
  regis (state, arrayData) {
    state.data.push(arrayData)
  }
}
