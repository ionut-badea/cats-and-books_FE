<template>
  <div>
    <div v-for="tag of tags" :key="tag.node.id" class="has-text-centered">
      <nuxt-link
        :to="'/archive/tags/' + tag.node.slug"
        class="title has-text-primary is-size-6-mobile is-size-5-tablet is-size-4-desktop"
      >
        {{ tag.node.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('archives/tags', {
      tags: (state) => state.tags.edges,
    }),
  },
};
</script>

<style scoped></style>
