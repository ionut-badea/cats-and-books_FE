<template>
  <div>
    <TheHeader />
    <div class="section is-small">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style></style>
