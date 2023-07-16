<!DOCTYPE html>
<!-- svelte-ignore a11y-missing-attribute -->
<html>
<head>
  <title>Music Player</title>
  <style>
    body {
      background-color: #f5f5f7;
    }

    .music-player {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      padding: 40px;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
      width: 300px;
    }

    .cover-art {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
      border-radius: 10px;
      object-fit: cover;
    }

    .controls {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }

    .controls button {
      margin: 0 10px;
      padding: 12px 24px;
      font-size: 16px;
      border: none;
      border-radius: 50%;
      background-color: #fbfbfc;
      color: #000;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }

    .controls button:hover {
      background-color: #e5e5e7;
    }
  </style>
</head>
<body>
  <div class="music-player">
    <img class="cover-art" src="path/to/cover1.jpg" alt="Cover Art">
    <audio id="audio-player" src="path/to/audio1.mp3"></audio>
    <div class="controls">
      <button id="prev-btn">⏮️</button>
      <button id="play-pause-btn">▶️</button>
      <button id="next-btn">⏭️</button>
    </div>
  </div>

  <script>
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-btn');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const coverArt = document.querySelector('.cover-art');

    let isPlaying = false;
    let currentSongIndex = 0;

    const songs = [
      {
        cover: '/src/lib/server/audio/song1.png',
        audio: '/src/lib/server/audio/song1.mp3'
      },
      {
        cover: '/src/lib/server/audio/song2.png',
        audio: '/src/lib/server/audio/song2.mp3'
      }
    ];

    function loadSong() {
      const currentSong = songs[currentSongIndex];
      coverArt.src = currentSong.cover;
      audioPlayer.src = currentSong.audio;
    }

    function togglePlayPause() {
      if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.textContent = '▶️';
      } else {
        audioPlayer.play();
        playPauseButton.textContent = '⏸️';
      }
      isPlaying = !isPlaying;
    }

    function playNextSong() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      loadSong();
      if (isPlaying) {
        audioPlayer.play();
      }
    }

    function playPrevSong() {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      loadSong();
      if (isPlaying) {
        audioPlayer.play();
      }
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', playNextSong);
    prevButton.addEventListener('click', playPrevSong);

    audioPlayer.addEventListener('play', () => {
      playPauseButton.textContent = '⏸️';
      isPlaying = true;
    });

    audioPlayer.addEventListener('pause', () => {
      playPauseButton.textContent = '▶️';
      isPlaying = false;
    });

    coverArt.addEventListener('click', togglePlayPause);

    // Load the first song
    loadSong();
  </script>
</body>
</html>
