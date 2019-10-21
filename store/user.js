export const state = () => ({
  user: []
})

export const mutations = {

  SET_USERS (state, list) {
    state.user = list
  }
}

export const actions = {
  adduser ({ commit, state }, user) {
    const savedusers = [...state.user]
    savedusers.push(user)
    commit('SET_USERS', savedusers)
  },

  usersList ({ commit, state }, data) {
    commit('SET_USERS', data)
  }
}

export const getters = {
  getusers: (state, getters) => {
    return getters.user
  }
}
