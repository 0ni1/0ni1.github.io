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
      max-width: 500px;
      margin: 20px auto;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 20px;
    }

    .chat-box {
      height: 300px;
      overflow-y: scroll;
      border: 1px solid #ddd;
      padding: 10px;
      margin-bottom: 10px;
    }

    .message {
      background-color: #f1f1f1;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
    }

    .input-box {
      display: flex;
      margin-top: 10px;
    }

    .input-box input {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 5px;
      margin-right: 10px;
    }

    .input-box button {
      padding: 10px 20px;
      border: none;
      background-color: #04AA6D;
      color: #fff;
      cursor: pointer;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="chat-box" id="chatBox"></div>
    <div class="input-box">
      <input type="text" id="messageInput" placeholder="Type your message">
      <button id="sendButton">Send</button>
    </div>
  </div>

  <script>
    const chatBox = document.getElementById('chatBox');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });

    function sendMessage() {
      const message = messageInput.value.trim();

      if (message !== '') {
        appendMessage(message);
        messageInput.value = '';
      }
    }

    function appendMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = message;
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  </script>
</body>
</html>
