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
  </footer>
</template>

<script>
import TheMenu from './TheMenu'
import TheSocial from './TheSocial'
import TheSubscriber from './TheSubscription'

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
