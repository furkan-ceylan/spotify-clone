<template>
  <div class="footer">
    <div class="left-song-info">
      <div class="song-img">
        <img src="../assets/album.jpg" />
      </div>
      <div class="song-info">
        <h4>Playlist Name</h4>
        <h5>Artist Name</h5>
      </div>
      <i class="material-icons favorite" style="color: var(--green);"
        >favorite</i
      >
      <i class="material-icons">picture_in_picture_alt</i>
    </div>
    <div class="middle">
      <div class="play-buttons">
        <button class="play-button">
          <i class="material-icons action-button">shuffle</i>
        </button>
        <button class="play-button">
          <i class="material-icons action-button">skip_previous</i>
        </button>
        <button
          class="play-button"
          @click.prevent="playSong(), (isPaused = !isPaused)"
        >
          <i class="material-icons action-button play" v-if="!isPaused"
            >play_circle</i
          >
          <i class="material-icons action-button play" v-else>pause_circle</i>
        </button>
        <button class="play-button">
          <i class="material-icons action-button">skip_next</i>
        </button>
        <button class="play-button">
          <i class="material-icons action-button">repeat</i>
        </button>
      </div>
      <div class="play-bar">
        <p class="time">0:28</p>
        <div class="play-bar-inside">
          <div class="play-bar-inside2"></div>
          <div class="play-bar-circle"></div>
        </div>
        <p class="time">5:45</p>
      </div>
    </div>
    <div class="right-buttons">
      <i class="material-icons">playlist_play</i>
      <i class="material-icons">important_devices</i>
      <i class="material-icons">volume_up</i>
      <div class="volume-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isPaused: false,
    }
  },
  methods: {
    playSong() {
      var audio = new Audio('california.mp3')
      audio.play()
    },
  },
}
</script>

<style>
.footer {
  height: 11vh;
  background-color: var(--dark);
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: white;
  border-top: var(--light) 1px solid;
}

.left-song-info {
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
}

.left-song-info i {
  color: var(--lightest);
  padding-right: 0.75rem;
  font-size: 1.2rem;
}

.song-info {
  padding-left: 1rem;
  margin-right: 1rem;
}

.song-info h4 {
  font-size: 0.9rem;
}

.song-info h5 {
  font-size: 0.75rem;
  color: var(--lightest);
}

.song-img {
  width: 64px;
  height: 64px;
}

.right-buttons {
  display: flex;
  align-items: center;
}

.right-buttons i {
  font-size: 1.2rem;
  color: var(--lightest);
  padding-right: 0.75rem;
}

.volume-bar {
  width: 6.5rem;
  height: 4px;
  border-radius: 9999px;
  margin-right: 2rem;
  background-color: var(--lightest);
}

.play-buttons {
  display: flex;
  align-items: center;
}

.action-button {
  font-size: 1.2rem;
  color: var(--lightest);
  margin-right: 1rem;
}

.action-button:hover {
  color: white;
}

.play {
  width: 50px;
  height: 50px;
  font-size: 2.5rem;
  padding-left: 8px;
  color: white;
  display: flex;
}

.play:hover {
  font-size: 2.7rem;
}

.middle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.play-bar {
  width: 100%;
  display: flex;
  align-items: center;
}

.play-bar-inside {
  width: 50rem;
  height: 3px;
  border-radius: 9999px;
  background-color: #454545;
  display: flex;
  align-items: center;
}

.play-bar-inside:hover .play-bar-inside2 {
  background-color: var(--green);
}

.play-bar-inside:hover .play-bar-circle {
  opacity: 1;
}

.play-bar-inside2 {
  width: 20%;
  height: 4px;
  border-radius: 9999px;
  background-color: var(--lightest);
}

.play-bar-circle {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background-color: white;
  opacity: 0;
}

.time {
  font-size: 0.75rem;
  color: var(--lightest);
  margin-right: 5px;
  margin-left: 5px;
}
</style>
