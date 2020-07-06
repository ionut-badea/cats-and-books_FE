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
          <ValidationObserver v-slot="{ handleSubmit }">
            <form method="POST">
              <ValidationProvider v-slot="{ classes }" rules="no_quotes">
                <input
                  id="search"
                  v-model="keywords"
                  name="search"
                  type="search"
                  class="input is-link has-text-link"
                  :class="classes"
                  placeholder="Search"
                  @keydown.enter.prevent="handleSubmit(search)"
                />
              </ValidationProvider>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    ...mapFields('searches', ['keywords'])
  },
  methods: {
    search() {
      this.$store.dispatch('searches/downloadSearchResultsByTitle')
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
input.input {
  width: 15rem;
  margin: 0px 1rem;
}
button#search {
  height: 40px;
  width: 40px;
  border-radius: 4px;
}
</style>
