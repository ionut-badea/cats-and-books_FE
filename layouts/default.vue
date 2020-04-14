<template>
  <div>
    <TheHeader></TheHeader>
    <div class="section is-small">
      <nuxt />
    </div>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
a {
  outline: 0;
}
body::-webkit-scrollbar {
  width: 0.5em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 0.5rem;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

body::-webkit-scrollbar-thumb {
  background-color: #ffdcbd;
  outline: 1px solid #ffb893;
  border-radius: 0.5rem;
}
</style>
