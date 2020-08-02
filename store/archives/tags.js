import { getField, updateField } from 'vuex-map-fields';
import { downloadTagArticlesBySlug, downloadAllTags } from '../../queries/archives/tags';

export const state = () => {
  return {
    tags: {},
    articlesByTag: {},
  };
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  pushTag(state, { value }) {
    state.tags.push(value);
  },
  saveData(state, { property, value }) {
    state[property] = value;
  },
};

export const actions = {
  // Download Articles by Tags
  async loadTagArticlesBySlug({ commit }, { slug }) {
    const allArticles = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: downloadTagArticlesBySlug.query,
        variables: `
          {
            "slug": "${slug}"
          }
        `,
      },
    });
    const articles = allArticles.data.data.tags.edges[0].node;
    commit('saveData', {
      property: 'articlesByTag',
      value: articles,
    });
  },
  async loadAllTags({ commit }) {
    const allTags = await this.$axios({
      url: 'api/',
      method: 'GET',
      data: {
        query: downloadAllTags.query,
      },
    });
    const tags = allTags.data.data.tags;
    commit('saveData', { property: 'tags', value: tags });
  },
};
