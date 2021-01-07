import { getField, updateField } from 'vuex-map-fields';
import { downloadCategoryArticlesBySlug, downloadAllCategories } from '../../queries/archives/categories';

export const state = () => {
  return {
    categories: {},
    articlesByCategory: {},
  };
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  pushCategory(state, { value }) {
    state.categories.push(value);
  },
  saveData(state, { property, value }) {
    state[property] = value;
  },
};

export const actions = {
  // Download Articles by Categories
  async loadCategoryArticlesBySlug({ commit }, { slug }) {
    const allArticles = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: downloadCategoryArticlesBySlug.query,
        variables: `
          {
            "slug": "${slug}"
          }
        `,
      },
    });
    const articles = allArticles.data.data.categories.edges[0].node;
    commit('saveData', {
      property: 'articlesByCategory',
      value: articles,
    });
  },
  // Download all Articles
  async loadAllCategories({ commit }) {
    const allCategories = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: downloadAllCategories.query,
      },
    });
    const categories = allCategories.data.data.categories;
    commit('saveData', { property: 'categories', value: categories });
  },
};
