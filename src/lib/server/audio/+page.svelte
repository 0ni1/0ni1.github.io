<script>
  import { onMount } from 'svelte';

  let isPlaying = false;
  let currentSongIndex = 0;
  let currentTime = 0;
  let duration = 0;

  const songs = [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      duration: 180,
      audioSrc: '/src/lib/server/audio/song1.mp3',
      coverArt: '/src/lib/server/audio/song1.png'
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      duration: 240,
      audioSrc: '/src/lib/server/audio/song2.mp3',
      coverArt: '/src/lib/server/audio/song1.png'
    }
  ];

  let audio;

  function playPause() {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  }

  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    resetAudio();
    playPause();
  }

  function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    resetAudio();
    playPause();
  }

  function resetAudio() {
    audio.pause();
    audio.currentTime = 0;
    currentTime = 0;
  }

  function handleTimeUpdate() {
    currentTime = audio.currentTime;
  }

  function handleDurationChange() {
    duration = audio.duration;
  }

  onMount(() => {
    audio.addEventListener('ended', nextSong);
  });
</script>

<style>
  .music-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, sans-serif;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .cover-art {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    object-fit: cover;
    border-radius: 50%;
  }

  .buttons {
    display: flex;
    margin-top: 20px;
  }

  button {
    padding: 10px;
    margin: 5px;
    font-size: 16px;
    border-radius: 4px;
    background-color: #2196f3;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #1976d2;
  }

  .current-song {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    opacity: 0;
    transition: opacity 0.5s;
  }

  .current-song.active {
    opacity: 1;
  }

  .current-song div {
    margin-bottom: 10px;
  }
</style>

<div class="music-player">
  <h1>Simple Music Player</h1>

  <img class="cover-art" src={songs[currentSongIndex].coverArt} alt="Cover Art" />

  <div class="buttons">
    <button on:click={previousSong}>Previous</button>
    <button on:click={playPause}>
      {#if isPlaying}
        Pause
      {:else}
        Play
      {/if}
    </button>
    <button on:click={nextSong}>Next</button>
  </div>

  <div class="current-song" class:active={isPlaying}>
    <div>{songs[currentSongIndex].title}</div>
    <div>{songs[currentSongIndex].artist}</div>
    <div>{currentTime.toFixed(2)} / {duration.toFixed(2)}</div>
  </div>

  <audio src={songs[currentSongIndex].audioSrc}
    on:timeupdate={handleTimeUpdate}
    on:durationchange={handleDurationChange}
    bind:this={audio}>
  </audio>
</div>
