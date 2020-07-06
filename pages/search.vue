<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column">
        <div v-for="article in articles" :key="article.node.id">
          <TheArticle
            v-if="!article.node.draft"
            :author="article.node.author.username"
            :title="article.node.title"
            :slug="article.node.slug"
            :abstract="article.node.abstract"
            :category="article.node.category"
            :tags="article.node.tags"
            :published="article.node.published"
          ></TheArticle>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheArticle from '../components/TheArticle'

export default {
  components: {
    TheArticle
  },
  computed: {
    ...mapState('searches', {
      articles: (state) => state.searchResults.edges
    })
  }
}
</script>

<style scoped></style>
