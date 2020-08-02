<template>
  <div>
    <div v-for="author of authors" :key="author.node.id" class="has-text-centered">
      <nuxt-link
        :to="`/archive/authors/${author.node.username}`"
        class="title has-text-primary is-size-6-mobile is-size-5-tablet is-size-4-desktop"
      >
        {{ author.node.username }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('archives/authors', {
      authors: (state) => state.authors.users.edges,
    }),
  },
};
</script>

<style scoped></style>
