<script>

  import { blank_object } from "svelte/internal";

</script>
<!--
  <nav>
  <li> <a href="/">Home</a></li>
  <li> <a href="/clicker">Cookie Clicker</a></li>
  <li> <a href="/chat">Chat</a></li>
  <li> <a href="/todo">TODO</a></li>¨
  <li> <a class="active" href="/about">About</a></li>


  <a href="/telltale">Telltale</a>
  <a href="/blog">Blog</a>
  <a href="/memory">Memory</a>
  <a href="/search">Search</a>
  <a href="/blog">Blog</a>
-->

 <!-- Top navigation -->
 <nav class="Nav">
  <div class="Nav-Centered">
     <a href="/">Home</a>
     <a href="/clicker">Cookie Clicker</a>
     <a href="/chat">Chat</a>
     <a href="/todo">TODO</a>
     <a href="/rotating-bf">RBF</a>
	 <a href="/about">About</a>

  </div>
</nav> 
<slot />


<style>


/* Add a black background color to the top navigation */
nav {
  position: relative;
  background-color: #333;
  overflow: hidden;
  display: block;
  border-radius: 27px;
  padding: 3px;
}

/* Style the links inside the navigation bar */
nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 27px;

}

/* Change the color of links on hover */
nav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
/* nav a.active {
  background-color: #04AA6D;
  color: white;
} */


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