<template>
  <div class="collection">
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
      <div class="header-right">
        <div class="profile">
          <button @click="showDropDown = !showDropDown">
            <img class="profile-photo" src="../assets/profilePhoto.png" />
            <span class="profile-name">User Name</span>
            <i class="material-icons" v-if="!showDropDown">
              arrow_drop_down
            </i>
            <i class="material-icons" v-else>
              arrow_drop_up
            </i>
          </button>
        </div>
        <div class="profile-dropdown" v-if="showDropDown">
          <button class="profile-button">Account</button>
          <button class="profile-button">Profile</button>
          <button class="profile-button">Sign Out</button>
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
  data() {
    return {
      showDropDown: false,
    }
  },
}
</script>

<style scoped>
.collection {
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

.header-right {
  position: relative;
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
  cursor: pointer;
}

.profile button {
  color: white;
}

.profile i {
  position: absolute;
  top: 1.25rem;
  right: 1.75rem;
}

.profile:hover {
  background-color: var(--light);
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

.profile-dropdown {
  position: absolute;
  background-color: var(--light);
  width: 100%;
  margin-top: 1rem;
  right: 2rem;
  border: 5px solid var(--light);
}

.profile-button {
  width: 100%;
  color: white;
  font-weight: bold;
  text-align: left;
  padding-left: 1rem;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
}

.profile-button:hover {
  background-color: var(--gray);
}

@media only screen and (max-width: 1280px) {
  .profile-name {
    display: none;
  }
  .profile i {
    display: none;
  }
  .profile-photo {
    margin-right: 0;
  }
  .profile-dropdown {
    width: 200px;
    margin-top: 1rem;
  }
}
</style>
