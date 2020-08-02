<template>
  <div class="container">
    <div>
      <h1 class="title has-text-centered has-text-primary">
        {{ category }}
      </h1>
      <div class="box has-background-primary">
        <div class="columns is-centered">
          <div class="column has-text-left is-12-mobile is-3-tablet">
            Title
          </div>
          <div class="column has-text-centered is-12-mobile is-3-tablet">
            Author
          </div>
          <div class="column has-text-centered is-12-mobile is-3-tablet">
            Tags
          </div>
          <div class="column has-text-centered is-12-mobile is-3-tablet">
            Published
          </div>
        </div>
      </div>
      <div v-for="article of articles" :key="article.id">
        <TheCategory
          :title="article.title"
          :slug="article.slug"
          :author="article.author.username"
          :tags="article.tags"
          :published="article.published"
        >
        </TheCategory>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheCategory from '../../../../components/TheCategory';

export default {
  components: {
    TheCategory,
  },
  async asyncData({ params, store }) {
    await store.dispatch('archives/categories/loadCategoryArticlesBySlug', {
      slug: params.slug,
    });
  },
  computed: {
    ...mapState('archives/categories', {
      category: (state) => state.articlesByCategory.name,
      articles: (state) => state.articlesByCategory.articles,
    }),
  },
};
</script>

<style scoped></style>
