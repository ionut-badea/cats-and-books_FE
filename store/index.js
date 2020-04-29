export const state = () => {
  return {}
}

export const mutations = {
  saveData(state, { property, value }) {
    state[property] = value
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('posts/articles')
    const name = this.$cookies.get('name')
    if (name) {
      commit('posts/setCommentName', { name })
    }
  }
}
