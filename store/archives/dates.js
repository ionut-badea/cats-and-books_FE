import { downloadPublishedDates } from '../../queries/archives/dates'

export const state = () => {
  return {
    years: [],
    months: []
  }
}

export const getters = {}

export const mutations = {
  pushYears(state, { year }) {
    state.years.push(year)
  },
  pushMonths(state, { month }) {
    state.months.push(month)
  }
}

export const actions = {
  async loadPublishedDates({ commit, state }) {
    const dates = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: downloadPublishedDates.query
      }
    })
    const publishedDates = dates.data.data.articles.edges
    for (const node of publishedDates) {
      const year = node.node.published.split('-')[0]
      const month = node.node.published.split('-')[1]
      if (!state.years.includes(year)) {
        commit('pushYears', { year })
      }
      if (!state.months.includes(month)) {
        commit('pushMonths', { month })
      }
    }
  }
}
