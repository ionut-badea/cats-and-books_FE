<template>
  <div class="columns is-centered is-vcentered">
    <div class="column is-12-mobile is-3-desktop has-text-centered">
      <h1 class="title">
        <nuxt-link to="/archive/authors/">
          Authors
        </nuxt-link>
      </h1>
    </div>
    <div class="column is-12-mobile is-3-desktop has-text-centered">
      <h1 class="title">
        <nuxt-link to="/archive/categories/">
          Categories
        </nuxt-link>
      </h1>
    </div>
    <div class="column is-12-mobile is-3-desktop has-text-centered">
      <h1 class="title">
        <nuxt-link to="/archive/tags/">
          Tags
        </nuxt-link>
      </h1>
    </div>
    <div class="column is-12-mobile is-3-desktop has-text-centered">
      <h1 class="title">
        <nuxt-link to="/archive/year/">
          Published date
        </nuxt-link>
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('archive/dates', {
      years: (state) => state.years,
      months: (state) => state.months,
    }),
  },
};
</script>

<style></style>
