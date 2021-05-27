<template>
  <div class="home">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="header"></div>
    <!-- <div class="content">asdss</div> -->
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default {
  components: { Sidebar, Footer },
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

.header {
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0;
  background-color: #212121;
}
</style>
