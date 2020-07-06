<template>
  <article class="box">
    <nuxt-link :to="slug">
      <h1
        class="title is-size-5-mobile is-size-3-tablet is-size-2-widescreen has-text-centered"
      >
        {{ title }}
      </h1>
    </nuxt-link>
    <br />
    <div class="columns is-centered">
      <div class="column has-text-centered is-12-mobile is-3-tablet">
        <h2
          class="subtitle is-size-6-mobile is-size-5-tablet is-size-4-desktop"
        >
          wrote by
          <nuxt-link :to="`archive/authors/${author}`">
            <strong>{{ author }}</strong>
          </nuxt-link>
        </h2>
      </div>
      <div class="column has-text-centered is-12-mobile is-6-tablet">
        <div v-for="tag in tags" :key="tag.id" class="tags">
          <nuxt-link :to="`archive/tags/${tag.slug}`">
            <span class="tag is-size-7-mobile is-size-6-tablet">
              {{ tag.name }}
            </span>
          </nuxt-link>
        </div>
        <h2
          class="subtitle is-size-6-mobile is-size-5-tablet is-size-4-desktop"
        >
          published
          <strong>{{ $moment(published).from() }}</strong>
        </h2>
      </div>
      <div class="column has-text-centered is-12-mobile is-3-tablet">
        <h2
          class="subtitle is-size-6-mobile is-size-5-tablet is-size-4-desktop"
        >
          category
          <nuxt-link :to="`archive/categories/${category.slug}`">
            <strong>{{ category.name }}</strong>
          </nuxt-link>
        </h2>
      </div>
    </div>
    <div class>
      <p class="content is-size-6-mobile is-size-5-desktop">{{ abstract }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    // image: {
    //   type: String,
    //   default: ''
    // },
    abstract: {
      type: String,
      required: true
    },
    category: {
      type: Object,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    published: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
article.box {
  margin: 3rem 0px;
  padding: 2%;
}
div.tags {
  display: inline-block;
  margin: 0% 2%;
}
</style>
