<template>
  <div class="container">
    <div>
      <h1 class="title has-text-centered has-text-primary">
        {{ author }}
      </h1>
      <div class="box has-background-primary">
        <div class="columns is-centered">
          <div class="column has-text-left is-12-mobile is-3-tablet">
            Title
          </div>
          <div class="column has-text-centered is-12-mobile is-3-tablet">
            Category
          </div>
          <div class="column has-text-centered is-12-mobile is-3-tablet">
            Tags
          </div>
          <div class="column has-text-centered is-12-mobile is-3-tablet">
            Published
          </div>
        </div>
      </div>
      <div v-for="article of articles" :key="article.node.id">
        <TheAuthor
          :title="article.node.title"
          :slug="article.node.slug"
          :category="article.node.category"
          :tags="article.node.tags"
          :published="article.node.published"
        >
        </TheAuthor>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheAuthor from '../../../../components/TheAuthor';

export default {
  components: {
    TheAuthor,
  },
  async asyncData({ params, store }) {
    await store.dispatch('archives/authors/loadAuthorArticlesByUsername', {
      username: params.username,
    });
  },
  computed: {
    ...mapState('archives/authors', {
      author: (state) => state.articlesByAuthor.username,
      articles: (state) => state.articlesByAuthor.articles.edges,
    }),
  },
};
</script>

<style scoped></style>
