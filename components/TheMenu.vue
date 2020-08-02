<template>
  <div class="columns is-centered">
    <div class="column is-12-mobile is-6-tablet is-3-desktop">
      <h1 class="title is-6 has-text-dark">Menu</h1>
      <ul>
        <nuxt-link tag="li" to="/" class="has-text-link">Home</nuxt-link>
        <nuxt-link tag="li" to="/about" class="has-text-link">About</nuxt-link>
        <nuxt-link tag="li" to="/contact" class="has-text-link">Contact</nuxt-link>
        <nuxt-link tag="li" to="/archive" class="has-text-link">Archive</nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  cursor: pointer;
}
li:hover {
  font-size: 1.25rem;
}
</style>
