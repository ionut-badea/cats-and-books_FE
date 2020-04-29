import { getField, updateField } from 'vuex-map-fields'
import { auth, refresh, userInfo } from '../queries/accounts.js'

export const state = () => {
  return {
    username: '',
    password: '',
    isAuthenticated: false
  }
}

export const getters = {
  getField
}

export const mutations = {
  updateField,
  saveData(state, { property, value }) {
    state[property] = value
  }
}

export const actions = {
  async login({ state, dispatch }) {
    const jwtToken = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: auth.mutation,
        variables: `
          {
            "credentials":{
              "username": "${state.username}",
              "password": "${state.password}"
            }
          }
        `
      }
    })
    if (jwtToken.data.data.auth) {
      const jwt = jwtToken.data.data.auth
      this.$cookies.set('refresh', jwt.refreshToken, {
        path: '/',
        httpOnly: false,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'Strict'
      })
      this.$cookies.set('token', jwt.token, {
        path: '/',
        httpOnly: false,
        maxAge: 60 * 5,
        sameSite: 'Strict'
      })
      this.$router.push({ path: '/' })
      setTimeout((_) => {
        dispatch('cancel')
      }, 500)
    } else {
      alert(jwtToken.data.errors[0].message)
    }
  },
  async refresh({ commit }) {
    const token = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: refresh.mutation,
        variables: `
          {
            "refreshToken": "${this.$cookies.get('refresh')}"
          }
        `
      }
    })
    commit('saveData', { property: 'token', value: token })
  },
  cancel({ commit }) {
    const fields = ['username', 'password']
    for (const field of fields) {
      commit('saveData', { property: field, value: '' })
    }
  },
  async user({ commit }) {
    const user = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: userInfo.query,
        variables: `
          {
            "user": ""
          }
        `
      }
    })
    console.log(user)
  }
}
