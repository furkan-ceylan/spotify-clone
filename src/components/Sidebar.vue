<template>
  <div class="sidebar">
    <div class="top-sidebar">
      <div class="logo-cover">
        <img class="logo" src="../assets/spotifyLogo.png" />
      </div>
      <div class="navbar">
        <router-link to="/">
          <div v-if="$route.name === 'Home'" class="on-page">
            <span class="material-icons w3-xxlarge">home</span>
            <span class="nav-icon">Home</span>
          </div>
          <div v-else class="not-on-page">
            <span class="material-icons w3-xxlarge">home</span>
            <span class="nav-icon">Home</span>
          </div>
        </router-link>
        <router-link to="/search">
          <div v-if="$route.name === 'search'" class="on-page">
            <span class="material-icons w3-xxlarge">search</span>
            <span class="nav-icon">Search</span>
          </div>
          <div v-else class="not-on-page">
            <span class="material-icons w3-xxlarge">search</span>
            <span class="nav-icon">Search</span>
          </div>
        </router-link>
        <router-link to="/collection">
          <div v-if="$route.name === 'collection'" class="on-page">
            <span class="material-icons w3-xxlarge">bar_chart</span>
            <span class="nav-icon">Your Library</span>
          </div>
          <div v-else class="not-on-page">
            <span class="material-icons w3-xxlarge">bar_chart</span>
            <span class="nav-icon">Collection</span>
          </div>
        </router-link>
      </div>
      <div class="lists">
        <div class="list-item">
          <img src="../assets/create.png" />
          <span class="nav-icon">Create a Playlist</span>
        </div>
        <div class="list-item">
          <img src="../assets/liked.png" />
          <span class="nav-icon">Liked Songs</span>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="bot-sidebar">
      <div class="playlists">
        <p v-for="playlist in playlists" class="playlist" :key="playlist.name">
          {{ playlist.name }}
        </p>
      </div>
      <div class="lists">
        <div class="list-item" style="font-weight: 500; padding: 0;">
          <span class="material-icons w3-xxlarge">arrow_downward</span>
          <span class="nav-icon">Install App</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  components: {},
  data() {
    return {
      playlists: [
        { name: 'Playlist1' },
        { name: 'Playlist2' },
        { name: 'Playlist3' },
        { name: 'Playlist4' },
        { name: 'Playlist5' },
        { name: 'Playlist6' },
        { name: 'Playlist7' },
        { name: 'Playlist8' },
        { name: 'Playlist9' },
        { name: 'Playlist10' },
        { name: 'Playlist11' },
        { name: 'Playlist12' },
        { name: 'Playlist13' },
      ],
    }
  },
}
</script>

<style>
.sidebar {
  background-color: #000000;
  width: 230px;
  height: 100%;
  flex: none;
  color: white;
  font-family: 'Helvetica';
  overflow: hidden;
}

.logo {
  height: 3rem;
}

.top-sidebar {
  padding: 1.85rem;
}

.bot-sidebar {
  width: 100%;
  height: 300px;
  display: inline-block;
  padding-left: 1.85rem;
  padding-top: 1.85rem;
  margin-bottom: 1.85rem;
}

.navbar {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 1rem;
}

.on-page {
  opacity: 1;
  background-color: var(--light);
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.3rem 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.not-on-page {
  opacity: 0.7;
  background-color: none;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.3rem 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  transition: 0.3s;
}

.not-on-page:hover {
  opacity: 1;
  transition: 0.3s;
}

.nav-icon {
  margin-left: 1rem;
}

.lists {
  margin-top: 2rem;
}

.list-item {
  opacity: 0.7;
  width: 100%;
  padding: 0.3rem 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1rem;
  transition: 0.3s;
  cursor: pointer;
}

.list-item img {
  width: 2rem;
}

.list-item:hover {
  opacity: 1;
  transition: 0.3s;
}

.line {
  width: 100%;
  height: 2px;
  background-color: var(--darkest);
}

.playlists {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.playlist {
  padding-bottom: 1rem;
  color: var(--lightest);
  font-size: 1rem;
}

.playlist:hover {
  color: white;
}
</style>
