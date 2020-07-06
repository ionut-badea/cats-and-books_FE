<template>
  <div>
    <div
      v-for="category of categories"
      :key="category.node.id"
      class="has-text-centered"
    >
      <nuxt-link
        :to="`/archive/categories/${category.node.slug}`"
        class="title has-text-primary is-size-6-mobile is-size-5-tablet is-size-4-desktop"
      >
        {{ category.node.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('archives/categories', {
      categories: (state) => state.categories.edges
    })
  }
}
</script>

<style scoped></style>
