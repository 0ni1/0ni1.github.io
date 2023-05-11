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
 <div class = "outline">
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
      <option value="cymk">cmyk</option>
    </select>
  </nav>   
</div>
<slot/>


<style> /* CSS */


/* Add a black background color to the top navigation */
.outline {
  display: block;  
  margin: 0;
  padding: 10;
  border: 9px solid rgb(81, 81, 81);
  border-radius: 18px;
}

nav {
  position: relative;
  background-color: #333;
  overflow: hidden;
  display: block;
  border-radius: 10px;
  padding: 2px;
}

/* Style the links inside the navigation bar */
nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  margin: 2px;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 10px;

}

/* Change the color of links on hover */
nav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
nav a.active {
  background-color: #04AA6D;
  color: white;
} 


/* Centered section inside the top navigation */
.Nav-Centered a {
  float: center;
  position: absolute;
  top: 50%;
  left: 0%;
}
.Nav-Centered a {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
  }
</style>  