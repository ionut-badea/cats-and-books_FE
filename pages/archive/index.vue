<template>
  <div>
    <div class="container has-text-centered">
      <h1 class="title is-size-5-mobile has-text-link">
        The Archive section is under construction!
      </h1>
      <h1 class="title is-size-5-mobile has-text-link">
        Thank you for patience!
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('posts', {
      articles: (state) => state.articles
    })
  }
}
</script>

<style></style>
