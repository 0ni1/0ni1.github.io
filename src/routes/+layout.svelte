<script>
  import '../app.css'

  let selectedTheme

  function applyTheme(event){
    selectedTheme = event.target.value;
    console.log(selectedTheme)
    document.documentElement.setAttribute('data-theme',selectedTheme)
  }

</script>

<!-- Top navigation -->
<div class="outline">
  <nav class="Nav">
    <div class="Nav-Centered">
      <a class="active" href="/">Home</a>
      <a href="/clicker">Cookie Clicker</a>
      <a href="/chat">Chat</a>
      <a href="/todo">TODO</a>
      <a href="/about">About</a>
    </div>
    <select data-choose-theme on:change={(e)=>applyTheme(e)}>
      <option value="cupcake">Default</option>
      <option value="dark">Dark</option>
      <option value="cymk">CMYK</option>
    </select>
  </nav>
</div>
<slot/>


<style>
  /* CSS */

  /* Add a black background color to the top navigation */
  .outline {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #222;
    border-radius: 18px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #262626;
    border-radius: 10px;
    padding: 2px;
  }

  /* Style the links inside the navigation bar */
  nav a {
    color: #fff;
    text-align: center;
    margin: 0 10px;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    border-radius: 10px;
    transition: background-color 0.2s ease;
    background-color: #333;
  }

  /* Change the color of links on hover */
  nav a:hover {
    background-color: #555;
  }

  /* Add a color to the active/current link */
  nav a.active {
    background-color: #04AA6D;
    color: white;
  }

  /* Centered section inside the top navigation */
  .Nav-Centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>

