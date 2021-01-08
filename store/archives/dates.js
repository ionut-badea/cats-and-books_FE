import { getField, updateField } from 'vuex-map-fields';
import { downloadArticlesByDate, downloadAllYears } from '../../queries/archives/dates';

export const state = () => {
  return {
    years: [],
    articlesByYear: {},
  };
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  pushYears(state, year) {
    if (!state.years.includes(year)) {
      state.years.push(year);
    }
  },
  saveData(state, { property, value }) {
    state[property] = value;
  },
};

export const actions = {
  async loadArticlesByYear({ commit }, { year }) {
    const articles = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: downloadArticlesByDate.query,
        variables: `
          {
            "start_date": "${year}-01-01T00:00:00",
            "end_date": "${year}-12-31T23:59:59"
          }
        `,
      },
    });
    const publishedDates = articles.data.data.articles.edges;
    commit('saveData', { property: 'articlesByYear', value: publishedDates });
  },
  async loadAllYears({ commit }) {
    const allDates = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: downloadAllYears.query,
      },
    });
    const dates = allDates.data.data.articles.edges;
    for (const date of dates) {
      const year = date.node.published.split('-')[0];
      commit('pushYears', year);
    }
  },
  // ______________________________________
  // Download Articles by Categories
  // async loadCategoryArticlesBySlug({ commit }, { slug }) {
  //   const allArticles = await this.$axios({
  //     url: 'api/',
  //     method: 'POST',
  //     data: {
  //       query: downloadCategoryArticlesBySlug.query,
  //       variables: `
  //         {
  //           "slug": "${slug}"
  //         }
  //       `,
  //     },
  //   });
  //   const articles = allArticles.data.data.categories.edges[0].node;
  //   commit('saveData', {
  //     property: 'articlesByCategory',
  //     value: articles,
  //   });
  // },
  // // Download all Articles
  // async loadAllCategories({ commit }) {
  //   const allCategories = await this.$axios({
  //     url: 'api/',
  //     method: 'POST',
  //     data: {
  //       query: downloadAllCategories.query,
  //     },
  //   });
  //   const categories = allCategories.data.data.categories;
  //   commit('saveData', { property: 'categories', value: categories });
  // },
};
