export const state = () => {
  return {}
}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('posts/articles/loadAllArticles')
    await dispatch('archives/authors/loadAllAuthors')
    await dispatch('archives/categories/loadAllCategories')
    await dispatch('archives/tags/loadAllTags')
    const name = this.$cookies.get('name')
    if (name) {
      commit('posts/comments/setCommentName', { name })
    }
  }
}
