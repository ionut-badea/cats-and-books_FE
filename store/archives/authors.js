import { getField, updateField } from 'vuex-map-fields';
import { downloadAuthorArticlesByUsername, downloadAllAuthors } from '../../queries/archives/authors';

export const state = () => {
  return {
    authors: {},
    articlesByAuthor: {},
  };
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  pushCategory(state, { value }) {
    state.authors.push(value);
  },
  saveData(state, { property, value }) {
    state[property] = value;
  },
};

export const actions = {
  // Download Articles by Categories
  async loadAuthorArticlesByUsername({ commit }, { username }) {
    const allArticles = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: downloadAuthorArticlesByUsername.query,
        variables: `
          {
            "username": "${username}"
          }
        `,
      },
    });
    const articles = allArticles.data.data.users.edges[0].node;
    commit('saveData', {
      property: 'articlesByAuthor',
      value: articles,
    });
  },
  // Download all Articles
  async loadAllAuthors({ commit }) {
    const allAuthors = await this.$axios({
      url: 'api/',
      method: 'GET',
      data: {
        query: downloadAllAuthors.query,
      },
    });
    const authors = allAuthors.data.data;
    commit('saveData', { property: 'authors', value: authors });
  },
};
