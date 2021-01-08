<template>
  <div>
    <div v-for="year of years" :key="year" class="has-text-centered">
      <nuxt-link
        :to="`/archive/dates/${year}`"
        class="title has-text-primary is-size-6-mobile is-size-5-tablet is-size-4-desktop"
      >
        {{ year }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('archives/dates', {
      years: (state) => state.years,
    }),
  },
};
</script>

<style scoped></style>
