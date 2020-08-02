import { getField, updateField } from 'vuex-map-fields';
import { downloadSearchResultsByTitle } from '../../queries/searches';

export const state = () => {
  return {
    keywords: '',
    searchResults: {},
  };
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  pushSearchArticle(state, { value }) {
    state.searchResults.edges.push(value);
  },
  saveData(state, { property, value }) {
    state[property] = value;
  },
};

export const actions = {
  async downloadSearchResultsByTitle({ state, commit }) {
    const articles = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: downloadSearchResultsByTitle.query,
        variables: `
          {
            "title": "${state.keywords}"
          }
        `,
      },
    });
    const results = articles.data.data.articles;
    commit('saveData', { property: 'searchResults', value: results });
  },
};
