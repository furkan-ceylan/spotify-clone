<template>
  <div class="home">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="header">
      <div class="arrows">
        <button class="arrow">
          <i class="material-icons">keyboard_arrow_left</i>
        </button>
        <button class="arrow">
          <i class="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
      <div>
        <div class="profile">
          <img class="profile-photo" src="../assets/profilePhoto.png" />
          <span class="profile-name">User Name</span>
          <i class="material-icons">arrow_drop_down</i>
        </div>
      </div>
    </div>
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
  color: white;
}

.header {
  width: 100%;
  height: 72px;
  position: sticky;
  top: 0;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
}

.arrows {
  display: flex;
  align-items: center;
  margin-left: 2rem;
  margin-top: 0.75rem;
}

.arrow {
  background-color: black;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: white;
  margin-left: 1.5rem;
}

.profile {
  display: flex;
  align-items: center;
  background-color: black;
  border-radius: 9999px;
  padding: 0.5rem;
  margin-right: 2rem;
  margin-top: 0.75rem;
}

.profile-photo {
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
}

.profile-name {
  font-weight: bold;
  margin-right: 1rem;
}
</style>
