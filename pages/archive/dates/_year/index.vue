<template>
  <div class="container">
    <div>
      <h1 class="title has-text-centered has-text-primary">{{ year }}</h1>
      <div class="box has-background-primary">
        <div class="columns is-centered">
          <div class="column has-text-left is-12-mobile is-3-tablet">Title</div>
          <div class="column has-text-centered is-12-mobile is-3-tablet">Category</div>
          <div class="column has-text-centered is-12-mobile is-3-tablet">Tags</div>
          <div class="column has-text-centered is-12-mobile is-3-tablet">Author</div>
        </div>
      </div>
      <div v-for="article of articles" :key="article.node.id">
        <TheYear
          :title="article.node.title"
          :slug="article.node.slug"
          :category="article.node.category"
          :tags="article.node.tags"
          :author="article.node.author.username"
        >
        </TheYear>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheYear from '../../../../components/TheYear';

export default {
  components: {
    TheYear,
  },
  async asyncData({ params, store }) {
    await store.dispatch('archives/dates/loadArticlesByYear', {
      year: params.year,
    });
  },
  computed: {
    ...mapState('archives/dates', {
      year: (state) => state.articlesByYear[0].node.published.split('-')[0],
      articles: (state) => state.articlesByYear,
    }),
  },
};
</script>

<style scoped></style>
