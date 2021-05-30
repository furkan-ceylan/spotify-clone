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
}
</script>

<style>
.footer {
  height: 10vh;
  background-color: var(--dark);
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: white;
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
</style>
