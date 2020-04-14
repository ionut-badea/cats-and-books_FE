export const state = () => {
  return {}
}

export const mutations = {
  saveData(state, { property, value }) {
    state[property] = value
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('posts/articles')
  }
}
