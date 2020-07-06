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
            :published="article.node.published"
            :category="article.node.category"
            :tags="article.node.tags"
          ></TheArticle>
        </div>
        <div class="has-text-centered">
          <button
            v-if="hasNextPage && articles.length > 0"
            class="button is-primary"
            @click="loadNextPage"
          >
            Load more articles
          </button>
        </div>
        <div
          v-if="!hasNextPage && articles.length > 0"
          class="has-text-centered subtitle is-size-6-mobile is-size-5-tablet is-size-4-desktop has-text-info"
        >
          <b>For now, these are all the articles on Cats and Books.</b>
          <br />
          <b>Subscribe to receive the newest articles in mailbox.</b>
        </div>
        <div
          v-if="articles.length === 0"
          class="has-text-centered subtitle is-size-6-mobile is-size-5-tablet is-size-4-desktop has-text-info"
        >
          Something went wrong.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TheArticle from '../components/TheArticle'

export default {
  components: {
    TheArticle
  },
  computed: {
    ...mapState('posts/articles', {
      articles: (state) => state.articles.edges,
      total: (state) => state.articles.total,
      hasNextPage: (state) => state.articles.pageInfo.hasNextPage
    })
  },
  methods: {
    ...mapActions('posts/articles', ['loadNextPage'])
  }
}
</script>

<style scoped></style>
