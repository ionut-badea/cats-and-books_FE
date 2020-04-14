import { getField, updateField } from 'vuex-map-fields'
import { AddMessage } from '../queries/contact.js'

export const state = () => {
  return {
    name: '',
    email: '',
    body: '',
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
  async send({ state, dispatch }) {
    if (state.terms) {
      await this.$axios({
        url: 'api/',
        method: 'POST',
        data: {
          query: AddMessage.mutation,
          variables: `
            {
              "input":{
                "name": "${state.name}",
                "email": "${state.email.toLowerCase()}",
                "body": "${state.body}",
                "terms": ${state.terms}
              }
            }
          `
        }
      })
      this.$router.push({ path: 'thanks/' })
      setTimeout((_) => {
        dispatch('cancel')
      }, 500)
    } else {
      alert('You must agree terms and conditions!')
    }
  },
  cancel({ commit }) {
    const fields = ['name', 'email', 'body', 'terms']
    for (const field of fields) {
      commit('saveData', { property: field, data: '' })
    }
  }
}
