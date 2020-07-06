<template>
  <div class="box">
    <div class="columns is-centered is-vcentered">
      <div class="column has-text-left is-12-mobile is-3-tablet">
        <nuxt-link :to="`/${slug}`">
          {{ title }}
        </nuxt-link>
      </div>
      <div class="column has-text-centered is-12-mobile is-3-tablet">
        <nuxt-link :to="`/archive/authors/${author}`">
          {{ author }}
        </nuxt-link>
      </div>
      <div class="column has-text-centered is-12-mobile is-3-tablet">
        <nuxt-link :to="`/archive/categories/${category.slug}`">
          {{ category.name }}
        </nuxt-link>
      </div>
      <div class="column has-text-centered is-12-mobile is-3-tablet">
        <nuxt-link to="/archive/year">
          {{ $moment(published).from() }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    category: {
      type: Object,
      required: true
    },
    published: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
