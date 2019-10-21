export const state = () => ({
  people: []
})

export const mutations = {
  addPeople (state, data) {
    state.people.push(data)
  }
}
