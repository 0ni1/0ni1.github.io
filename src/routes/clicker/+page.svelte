<!DOCTYPE html>
<!-- svelte-ignore a11y-missing-attribute -->
<html>
<head>
  <style>
    /* CSS */
    body {
      font-family: Arial, sans-serif;
      background-color: #f8f8f8;
      margin: 0;
      padding: 0;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .game {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding: 20px;
      background-color: #f3f3f3;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }

    .cookie-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-right: 20px;
    }

    .cookie {
      width: 200px;
      height: 200px;
      background-image: url('CC.png');
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
      transition: transform 0.1s;
    }

    .cookie.clicked {
      transform: scale(0.9);
    }

    .score {
      font-size: 24px;
      margin-top: 20px;
    }

    .shop-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #eaeaea;
      border-radius: 6px;
      padding: 10px;
      width: 200px;
    }

    .shop-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .shop-item img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }

    .item-title {
      font-weight: bold;
      margin-right: 10px;
    }

    .item-count {
      margin-left: auto;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="game">
      <div class="cookie-container">
        <div class="cookie" onclick="incrementScore()"></div>
        <div class="score">Score: <span id="score">0</span></div>
      </div>
      <div class="shop-container">
        <div class="shop-item">
          <img src="CC.png" alt="Double Click">
          <div>
            <div class="item-title">Double Click</div>
            <div>Price: 10</div>
            <div id="double-click-count">0</div>
            <button onclick="buyItem('double-click', 10)">Buy</button>
          </div>
        </div>
        <div class="shop-item">
          <img src="CC.png" alt="Pointer">
          <div>
            <div class="item-title">Pointer</div>
            <div>Price: 50</div>
            <div id="pointer-count">0</div>
            <button onclick="buyItem('pointer', 50)">Buy</button>
          </div>
        </div>
        <div class="shop-item">
          <img src="CC.png" alt="Farm">
          <div>
            <div class="item-title">Farm</div>
            <div>Price: 100</div>
            <div id="farm-count">0</div>
            <button onclick="buyItem('farm', 100)">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    let score = 0;
    let cookiesPerSecond = 0;
    let doubleClickCount = 0;
    let pointerCount = 0;
    let farmCount = 0;
    let farmInterval;

    function incrementScore() {
      score++;
      document.getElementById("score").textContent = score;
      document.querySelector('.cookie').classList.add('clicked');
      setTimeout(() => {
        document.querySelector('.cookie').classList.remove('clicked');
      }, 100);
    }

    function buyItem(itemType, price) {
      if (score >= price) {
        score -= price;
        document.getElementById("score").textContent = score;
        if (itemType === 'double-click') {
          doubleClickCount++;
          document.getElementById("double-click-count").textContent = doubleClickCount;
          document.querySelector('.cookie').addEventListener('dblclick', incrementScore);
        } else if (itemType === 'pointer') {
          pointerCount++;
          document.getElementById("pointer-count").textContent = pointerCount;
          cookiesPerSecond += 1;
          clearInterval(farmInterval);
          farmInterval = setInterval(() => {
            score += cookiesPerSecond;
            document.getElementById("score").textContent = score;
          }, 1000);
        } else if (itemType === 'farm') {
          farmCount++;
          document.getElementById("farm-count").textContent = farmCount;
          cookiesPerSecond += 20;
          clearInterval(farmInterval);
          farmInterval = setInterval(() => {
            score += cookiesPerSecond;
            document.getElementById("score").textContent = score;
          }, 10000);
        }
      }
    }
  </script>
</body>
</html>
