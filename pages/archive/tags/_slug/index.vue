<template>
  <div class="container">
    <div>
      <h1 class="title has-text-centered has-text-primary">
        {{ tag }}
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
            Category
          </div>
          <div class="column has-text-centered is-12-mobile is-3-tablet">
            Published
          </div>
        </div>
      </div>
      <div v-for="article of articles" :key="article.node.id">
        <TheTag
          :title="article.node.title"
          :slug="article.node.slug"
          :author="article.node.author.username"
          :category="article.node.category"
          :published="article.node.published"
        >
        </TheTag>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheTag from '../../../../components/TheTag'

export default {
  components: {
    TheTag
  },
  async asyncData({ params, store }) {
    await store.dispatch('archives/tags/loadTagArticlesBySlug', {
      slug: params.slug
    })
  },
  computed: {
    ...mapState('archives/tags', {
      tag: (state) => state.articlesByTag.name,
      articles: (state) => state.articlesByTag.articles.edges
    })
  }
}
</script>

<style scoped></style>
