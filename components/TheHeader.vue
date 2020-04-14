<template>
  <nav class="navbar" role="navigation" aria-label="main">
    <div class="navbar-brand">
      <nuxt-link to="/">
        <figure class="image">
          <img src="~assets/images/logo_RGB.png" alt="Home" class="logo" />
        </figure>
      </nuxt-link>
      <div
        class="navbar-burger"
        :class="{ 'is-active': active }"
        @click="active = !active"
      >
        <a
          role="button"
          class="burger"
          aria-label="menu"
          :aria-expanded="active"
          data-target="navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>

    <div id="navbar" class="navbar-menu" :class="{ display: active }">
      <div class="navbar-end">
        <div class="navbar-item">
          <nuxt-link to="/archive" class="has-text-centered link archive">
            <h1 class="title is-5 has-text-link">Archive</h1>
          </nuxt-link>
        </div>
        <div class="navbar-item">
          <nuxt-link to="/about" class="has-text-centered link">
            <h1 class="title is-5 has-text-link">About</h1>
          </nuxt-link>
        </div>
        <div class="navbar-item">
          <nuxt-link to="/contact" class="has-text-centered link">
            <h1 class="title is-5 has-text-link">Contact</h1>
          </nuxt-link>
        </div>
        <div class="navbar-item">
          <input
            id="search"
            v-model="keywords"
            name="search"
            type="search"
            class="input is-link has-text-link"
            placeholder="Search"
            @keydown.enter="search"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  data() {
    return {
      active: false
    }
  },
  computed: {
    ...mapFields('posts', ['keywords'])
  },
  methods: {
    search() {
      this.$store.dispatch('posts/search')
      this.$store.commit('posts/saveData', { property: 'keywords', value: '' })
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped>
.display {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr;
  place-items: center center;
}
img.logo {
  width: 5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  transform: scaleX(-1);
}
.link {
  width: 8rem;
  margin: 0px 1rem;
}
.link:hover {
  color: #4f6043;
  border-bottom: 2px solid #4f6043;
}
input.input {
  width: 15rem;
  margin: 0px 1rem;
}
</style>
