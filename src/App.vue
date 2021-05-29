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

<style scoped>
.app {
  height: 100vh;
  background-color: var(--dark);
}

.app2 {
  height: 90vh;
  background-color: #121212;
  display: flex;
}
</style>
