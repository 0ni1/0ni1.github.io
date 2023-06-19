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

    h1 {
      text-align: center;
    }

    .todo-form {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    .todo-input {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 5px;
      margin-right: 10px;
    }

    .todo-button {
      padding: 10px 20px;
      border: none;
      background-color: #04AA6D;
      color: #fff;
      cursor: pointer;
      border-radius: 5px;
    }

    .todo-list {
      list-style: none;
      padding: 0;
    }

    .todo-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }

    .todo-item:last-child {
      border-bottom: none;
    }

    .todo-item .delete-button {
      color: red;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .todo-item .delete-button:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Todo List</h1>
    <form class="todo-form" onsubmit="addTodo(event)">
      <input class="todo-input" type="text" placeholder="Enter a task" required>
      <button class="todo-button" type="submit">Add</button>
    </form>
    <ul class="todo-list"></ul>
  </div>

  <script>
    const todoList = document.querySelector('.todo-list');

    function addTodo(event) {
      event.preventDefault();

      const input = event.target.querySelector('.todo-input');
      const todoText = input.value.trim();

      if (todoText !== '') {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        input.value = '';
      }
    }

    function createTodoItem(todoText) {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');

      const todoContent = document.createElement('span');
      todoContent.textContent = todoText;
      todoItem.appendChild(todoContent);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        todoItem.remove();
      });
      todoItem.appendChild(deleteButton);

      return todoItem;
    }
  </script>
</body>
</html>
