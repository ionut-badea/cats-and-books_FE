import { getField, updateField } from 'vuex-map-fields';
import { downloadAllComments, AddComment } from '../../queries/posts/comments';

export const state = () => {
  return {
    comment: {
      body: '',
      name: '',
      save: false,
    },
    comments: [],
  };
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  pushComment(state, { value }) {
    state.comments.push(value);
  },
  cleanComment(state) {
    state.comment.body = '';
    state.comment.name = '';
    state.comment.save = false;
  },
  setCommentName(state, { name }) {
    state.comment.name = name;
  },
  saveData(state, { property, value }) {
    state[property] = value;
  },
};

export const actions = {
  async loadAllComments({ commit }, { slug }) {
    const comments = await this.$axios({
      url: 'api/',
      method: 'POST',
      data: {
        query: downloadAllComments.query,
        variables: `
          {
            "slug": "${slug}"
          }
        `,
      },
    });
    const value = comments.data.data.articles.edges[0].node.comments;
    commit('saveData', { property: 'comments', value });
  },

  async addComment({ state, commit }, { uid }) {
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
        `,
      },
    });
    const comment = {
      name: state.comment.name,
      body: state.comment.body,
    };
    commit('pushComment', { value: comment });
    const cookie = this.$cookies.get(name);
    if ((state.comment.save && !cookie) || (state.comment.save && state.comment.name !== cookie)) {
      this.$cookies.set('name', comment.name, {
        path: '/',
        httpOnly: false,
        maxAge: 60 * 60 * 24 * 365 * 10,
        sameSite: 'Strict',
      });
    }
    setTimeout((_) => {
      commit('cleanComment');
    }, 500);
  },

  cancel({ commit }) {
    const fields = ['body', 'name', 'save'];
    for (const field of fields) {
      commit('saveData', { property: field, data: '' });
    }
  },
};
