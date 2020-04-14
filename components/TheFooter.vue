<template>
  <footer class="footer">
    <div class="columns has-text-centered">
      <div class="column">
        <TheMenu />
      </div>
      <div class="column">
        <TheSocial></TheSocial>
      </div>
      <div class="column">
        <TheSubscriber></TheSubscriber>
      </div>
    </div>
    <!-- <div class="columns">
      <div class="column has-text-centered">
        <a href class="has-text-grey-light">Thanks for open source</a>
      </div>
      <div class="column has-text-centered">
        <a class="has-text-grey-light" href="http://yazee.me"
          >Proudly made by Yazee Me</a
        >
      </div>
      <div class="column has-text-centered">
        <nuxt-link to="/sitemap.xml" class="has-text-grey-light">Site map</nuxt-link>
      </div>
    </div> -->
  </footer>
</template>

<script>
import TheMenu from './TheMenu'
import TheSocial from './TheSocial'
import TheSubscriber from './TheSubscriber'

export default {
  components: {
    TheMenu,
    TheSocial,
    TheSubscriber
  }
}
</script>

<style scoped>
img.logo {
  width: 100px;
}
.red {
  opacity: 0.5;
  color: #cb2c30;
}
.blue {
  opacity: 0.5;
  color: #283266;
}
</style>
