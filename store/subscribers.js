import { getField, updateField } from 'vuex-map-fields'
import { Subscriber } from '../queries/subscribers'

export const state = () => {
  return {
    name: '',
    email: '',
    terms: false
  }
}

export const getters = {
  getField
}

export const mutations = {
  updateField,
  saveData(state, { property, data }) {
    state[property] = data
  }
}

export const actions = {
  async subscribe({ state, dispatch }) {
    if (state.terms) {
      await this.$axios({
        url: 'api/',
        method: 'POST',
        data: {
          query: Subscriber.mutation,
          variables: `
            {
              "subscriber":{
                "name": "${state.name}",
                "email": "${state.email.toLowerCase()}",
                "terms": ${state.terms},
                "status": ${true}
              }
            }
          `
        }
      })
      dispatch('cancel')
    } else {
      alert('You must agree terms and conditions!')
    }
  },
  cancel({ commit }) {
    const fields = ['name', 'email', 'terms']
    for (const field of fields) {
      commit('saveData', { property: field, data: '' })
    }
  }
}
