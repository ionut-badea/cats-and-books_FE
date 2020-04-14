<template>
  <div class="container">
    <div class="columns">
      <div class="column has-text-centered">
        Title
      </div>
      <div class="column has-text-centered">
        Author
      </div>
      <div class="column has-text-centered">
        Tags
      </div>
      <div class="column has-text-centered">
        Published
      </div>
    </div>
    <hr />
    <TheCategoryArticle
      title="Dune"
      author="jack"
      :tags="allTags"
      published="2020-04-09"
    >
    </TheCategoryArticle>
  </div>
</template>

<script>
import TheCategoryArticle from '../../../components/TheCategoryArticle'

export default {
  data() {
    return {
      allTags: ['first', 'second']
    }
  },
  components: {
    TheCategoryArticle
  }
}
</script>

<style scoped></style>
