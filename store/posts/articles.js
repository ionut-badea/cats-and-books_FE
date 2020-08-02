import { getField, updateField } from 'vuex-map-fields';
import { downloadArticleBySlug, downloadAllArticles } from '../../queries/posts/articles';

export const state = () => {
  return {
    article: {},
    articles: {},
    articlesOnPage: 5,
  };
};

export const getters = {
  getField,
  getUniqueBySlug: (state) => ({ property, slug }) => {
    return state[property].edges.find((article) => article.node.slug === slug);
  },
  getData: (state) => ({ property }) => {
    return state[property];
  },
};

export const mutations = {
  updateField,
  saveData(state, { property, value }) {
    state[property] = value;
  },
  pushArticle(state, { value }) {
    state.articles.edges.push(value);
  },
  updatePages(state, { nextCursor, hasNextPage }) {
    state.articles.pageInfo.endCursor = nextCursor;
    state.articles.pageInfo.hasNextPage = hasNextPage;
  },
};

export const actions = {
  async loadArticleBySlug({ commit }, { slug }) {
    const article = await this.$axios({
      url: 'api/',
      method: 'POST',
      withCredentials: true,
      data: {
        query: downloadArticleBySlug.query,
        variables: `
          {
            "slug": "${slug}"
          }
        `,
      },
    });
    const value = article.data.data.articles.edges[0].node;
    commit('saveData', { property: 'article', value });
  },

  async loadAllArticles({ state, commit }) {
    const articles = await this.$axios({
      url: 'api/',
      method: 'GET',
      data: {
        query: downloadAllArticles.query,
        variables: `
        {
          "articlesOnPage": ${state.articlesOnPage}
        }
        `,
      },
    });
    const value = articles.data.data.articles;
    commit('saveData', { property: 'articles', value });
  },

  async loadNextPage({ state, commit }) {
    const cursor = state.articles.pageInfo.endCursor;
    const articles = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: downloadAllArticles.query,
        variables: `
        {
          "articlesOnPage": ${state.articlesOnPage},
          "nextPage": "${cursor}"
        }
        `,
      },
    });
    const results = articles.data.data.articles.edges;
    for (const article of results) {
      commit('pushArticle', { value: article });
    }
    const nextCursor = articles.data.data.articles.pageInfo.endCursor;
    const hasNextPage = articles.data.data.articles.pageInfo.hasNextPage;
    commit('updatePages', { nextCursor, hasNextPage });
  },
};
