import { getField, updateField } from 'vuex-map-fields'
import {
  Article,
  Articles,
  AddComment,
  Comments,
  ArticlesByAuthor,
  ArticlesByCategories,
  ArticlesByTag
} from '../queries/posts'

export const state = () => {
  return {
    articles: {},
    article: {},
    comments: {},
    comment: {
      body: '',
      name: '',
      save: false
    },
    articlesOnPage: 1,
    keywords: '',
    searchResults: {},
    articlesByAuthor: {},
    articlesByCategory: {},
    articlesByTag: {}
  }
}

export const getters = {
  getField,
  getData: (state) => ({ property }) => {
    return state[property]
  },
  getUniqueBySlug: (state) => ({ property, slug }) => {
    return state[property].edges.find((article) => article.node.slug === slug)
  }
}

export const mutations = {
  updateField,
  saveData(state, { property, value }) {
    state[property] = value
  },
  pushArticle(state, { value }) {
    state.articles.edges.push(value)
  },
  pushComment(state, { value }) {
    state.comments.push(value)
  },
  updatePages(state, { nextCursor, hasNextPage }) {
    state.articles.pageInfo.endCursor = nextCursor
    state.articles.pageInfo.hasNextPage = hasNextPage
  },
  pushSearchArticle(state, { value }) {
    state.searchResults.edges.push(value)
  },
  cleanComment(state) {
    state.comment.body = ''
    state.comment.name = ''
    state.comment.save = false
  },
  setCommentName(state, { name }) {
    state.comment.name = name
  }
}

export const actions = {
  // Download all Articles for main page
  async articles({ state, commit }) {
    const articles = await this.$axios({
      url: 'api/',
      method: 'GET',
      data: {
        query: Articles.query,
        variables: `
        {
          "articlesOnPage": ${state.articlesOnPage},
          "title": ""
        }
        `
      }
    })
    const value = articles.data.data.articles
    commit('saveData', { property: 'articles', value })
  },

  // Download next page with articles
  async nextPage({ state, commit }) {
    const cursor = state.articles.pageInfo.endCursor
    const articles = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: Articles.query,
        variables: `
        {
          "articlesOnPage": ${state.articlesOnPage},
          "nextPage": "${cursor}",
          "title": ""
        }
        `
      }
    })
    const results = articles.data.data.articles.edges
    for (const article of results) {
      commit('pushArticle', { value: article })
    }
    const nextCursor = articles.data.data.articles.pageInfo.endCursor
    const hasNextPage = articles.data.data.articles.pageInfo.hasNextPage
    commit('updatePages', { nextCursor, hasNextPage })
  },

  // Download article by slug
  async article({ commit }, { slug }) {
    const article = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: Article.query,
        variables: `
          {
            "slug": "${slug}"
          }
        `
      }
    })
    const value = article.data.data.articles.edges[0].node
    commit('saveData', { property: 'article', value })
  },

  // Download comments by article
  async comments({ commit }, { slug }) {
    const comments = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: Comments.query,
        variables: `
          {
            "slug": "${slug}"
          }
        `
      }
    })
    const value = comments.data.data.articles.edges[0].node.comments
    commit('saveData', { property: 'comments', value })
  },

  // Add comment to api
  async sendComment({ state, commit }, { uid }) {
    await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: AddComment.mutation,
        variables: `
          {
            "comment":{
              "name": "${state.comment.name}",
              "body": "${state.comment.body}",
              "articleUID": "${uid}"
            }
          }
        `
      }
    })
    const comment = {
      name: state.comment.name,
      body: state.comment.body
    }
    commit('pushComment', { value: comment })
    const cookie = this.$cookies.get(name)
    if (
      (state.comment.save && !cookie) ||
      (state.comment.save && state.comment.name !== cookie)
    ) {
      this.$cookies.set('name', comment.name, {
        path: '/',
        httpOnly: false,
        maxAge: 60 * 60 * 24 * 365 * 10,
        sameSite: 'Strict'
      })
    }
    setTimeout((_) => {
      commit('cleanComment')
    }, 500)
  },

  // Clear fields after submision
  cancel({ commit }) {
    const fields = ['body', 'name', 'save']
    for (const field of fields) {
      commit('saveData', { property: field, data: '' })
    }
  },

  // Download articles by search keywords
  async search({ state, commit }) {
    const articles = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: Articles.query,
        variables: `
          {
            "title": "${state.keywords}"
          }
        `
      }
    })
    const results = articles.data.data.articles
    commit('saveData', { property: 'searchResults', value: results })
  },

  // Download Articles by username
  async userArticles({ state, commit }, { username }) {
    const articles = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: ArticlesByAuthor.query,
        variables: `
          {
            "username": "${username}"
          }
        `
      }
    })
    console.log(articles)
  },

  // Download Articles by Category
  async categoryArticles({ state, commit }, { category }) {
    const article = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: ArticlesByCategories.query,
        variables: `
          {
            "category": "${category}"
          }
        `
      }
    })
    console.log(article)
  }

  // Download Articles by Tags
}
