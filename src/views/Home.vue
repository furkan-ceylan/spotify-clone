<template>
  <div class="home">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="container">
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
            <button @click.prevent="showDropDown = !showDropDown">
              <img class="profile-photo" src="../assets/profilePhoto.png" />
              <span class="profile-name">furkan</span>
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
      <div class="content">
        <div class="content-head">
          <h1 style="font-weight: bold;">Good Evening</h1>
        </div>
        <div class="content-playlists">
          <div class="playlist-card">
            <div class="playlist-card-left">
              <img src="../assets/cover1.jpg" />
              <h4>Rock and Roll</h4>
            </div>
            <div class="card-play-button">
              <i class="material-icons">play_arrow</i>
            </div>
          </div>
          <div class="playlist-card">
            <div class="playlist-card-left">
              <img src="../assets/cover2.jpg" />
              <h4>Queen</h4>
            </div>
            <div class="card-play-button">
              <i class="material-icons">play_arrow</i>
            </div>
          </div>
          <div class="playlist-card hide-medium">
            <div class="playlist-card-left">
              <img src="../assets/cover3.jpg" />
              <h4>KISS</h4>
            </div>
            <div class="card-play-button">
              <i class="material-icons">play_arrow</i>
            </div>
          </div>
          <div class="playlist-card hide-medium">
            <div class="playlist-card-left">
              <img src="../assets/cover4.jpg" />
              <h4>Genesis</h4>
            </div>
            <div class="card-play-button">
              <i class="material-icons">play_arrow</i>
            </div>
          </div>
          <div class="playlist-card hide-small">
            <div class="playlist-card-left">
              <img src="../assets/cover5.jpg" />
              <h4>Iron Maiden</h4>
            </div>
            <div class="card-play-button">
              <i class="material-icons">play_arrow</i>
            </div>
          </div>
          <div class="playlist-card hide-small">
            <div class="playlist-card-left">
              <img src="../assets/cover6.jpg" />
              <h4>Guns N' Roses</h4>
            </div>
            <div class="card-play-button">
              <i class="material-icons">play_arrow</i>
            </div>
          </div>
        </div>
        <div class="content-head">
          <h3 style="font-weight: bold;">Recently Played</h3>
          <h5 class="content-head-see">
            SEE ALL
          </h5>
        </div>
        <div class="content-recently">
          <div class="recently-card">
            <div class="recently-card-top">
              <img src="../assets/album3.png" />
              <div class="card-play-button recently-button">
                <i class="material-icons">play_arrow</i>
              </div>
            </div>
            <div class="recetly-card-bottom">
              <h4>Ultravox Radio</h4>
              <p>by furkan</p>
            </div>
          </div>
          <div class="recently-card">
            <div class="recently-card-top">
              <img src="../assets/album4.png" />
              <div class="card-play-button recently-button">
                <i class="material-icons">play_arrow</i>
              </div>
            </div>
            <div class="recetly-card-bottom">
              <h4>Tame Impala Radio</h4>
              <p>by furkan</p>
            </div>
          </div>
          <div class="recently-card">
            <div class="recently-card-top">
              <img src="../assets/album5.png" />
              <div class="card-play-button recently-button">
                <i class="material-icons">play_arrow</i>
              </div>
            </div>
            <div class="recetly-card-bottom">
              <h4>Lynyrd Skynyrd Radio</h4>
              <p>by furkan</p>
            </div>
          </div>
          <div class="recently-card hide-last3">
            <div class="recently-card-top">
              <img src="../assets/album6.png" />
              <div class="card-play-button recently-button">
                <i class="material-icons">play_arrow</i>
              </div>
            </div>
            <div class="recetly-card-bottom">
              <h4>Fabrizio Paterlini</h4>
              <p>by furkan</p>
            </div>
          </div>
          <div class="recently-card hide-last">
            <div class="recently-card-top">
              <img src="../assets/album7.png" />
              <div class="card-play-button recently-button">
                <i class="material-icons">play_arrow</i>
              </div>
            </div>
            <div class="recetly-card-bottom">
              <h4>Muse Radio</h4>
              <p>by furkan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-shrink: 1;
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
  font-weight: 500;
  text-align: left;
  padding-left: 1rem;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
}

.profile-button:hover {
  background-color: var(--gray);
}

.container {
  width: 100%;
  height: 100%;
  background: rgb(18, 18, 18);
  background: linear-gradient(
    0deg,
    rgba(18, 18, 18, 1) 5%,
    rgba(33, 33, 33, 1) 100%
  );
}

.content {
  margin-top: 3rem;
  margin-left: 3.5rem;
  margin-right: 2rem;
}

.content-head {
  display: flex;
  justify-content: space-between;
}

.content-playlists {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
}

.playlist-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: var(--light);
  border-radius: 0.25rem;
  margin-right: 2rem;
  margin-bottom: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 5px;
  transition: 0.3s;
  cursor: pointer;
}

.playlist-card h4 {
  font-size: 1.1rem;
  font-weight: bold;
  padding-left: 2rem;
  padding-right: 2rem;
}

.playlist-card img {
  width: 85px;
  height: 85px;
}

.playlist-card:hover {
  background-color: var(--gray);
  transition: 0.3s;
}

.playlist-card:hover .card-play-button {
  opacity: 1;
  transition: 0.3s;
}

.playlist-card-left {
  display: flex;
  align-items: center;
  width: 100%;
  opacity: 1;
}

.card-play-button {
  background-color: var(--green);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  opacity: 0;
  transition: 0.3s;
  box-shadow: 0 8px 4px -4px black;
}

.card-play-button:hover {
  width: 44px;
  height: 44px;

  cursor: default;
}
.hide-medium {
  display: flex;
}

.hide-small {
  display: flex;
}

h3:hover {
  text-decoration: underline;
  cursor: pointer;
}

h5:hover {
  text-decoration: underline;
  cursor: pointer;
}

.content-head-see {
  font-weight: bold;
  font-size: 0.85rem;
  color: var(--lightest);
}

.content-recently {
  display: flex;
  overflow: hidden;
  width: 100%;
  transition: 1s;
}

.recently-card {
  width: 180px;
  height: 260px;
  background-color: var(--dark);
  border-radius: 0.25rem;
  padding: 1rem;
  transition: 0.3s;
  margin-right: 1.5rem;
}

.recently-card-top {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.recetly-card-bottom {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.recetly-card-bottom h4 {
  font-size: 1rem;
  font-weight: bold;
}

.recetly-card-bottom p {
  font-size: 0.75rem;
  font-weight: 200;
  color: var(--lightest);
}

.recently-card:hover {
  background-color: var(--light);
  transition: 0.3s;
}

.recently-card:hover .card-play-button {
  opacity: 1;
  transition: 0.3s;
}

.recently-button {
  position: absolute;
  margin-left: 90px;
  margin-top: 90px;
}

.hide-last {
  display: block;
}

.hide-last2 {
  display: block;
}

.hide-last3 {
  display: block;
}

@media only screen and (max-width: 1445px) {
  .content-playlists {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2rem;
  }

  .hide-medium {
    display: flex;
  }
  .hide-small {
    display: none;
  }
}

@media only screen and (max-width: 980px) {
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
  .hide-last3 {
    display: none;
  }
}

@media only screen and (max-width: 1145px) {
  .content-playlists {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2rem;
  }
  .hide-small {
    display: none;
  }
}

@media only screen and (max-width: 1290px) {
  .hide-last {
    display: none;
  }
}

@media only screen and (max-width: 850px) {
  .hide-last2 {
    display: none;
  }
}
</style>
