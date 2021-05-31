<template>
  <div class="app">
    <div class="app2">
      <router-view />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  components: { Footer },
}
</script>

<style scoped>
.app {
  height: 100vh;
  background-color: var(--dark);
}

.app2 {
  height: 89vh;
  background-color: #121212;
  display: flex;
}

.footer {
  height: 11vh;
}
</style>
