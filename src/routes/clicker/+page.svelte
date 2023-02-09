<script>
  import { redirect } from "@sveltejs/kit";


  let CPC = 0;
  function Clicks(){
    CPC += 1;
    document.getElementById("cookieCount").innerHTML = "Cookies: " + CPC;
  }
</script>

<!---<img id="CCB" class="CookieBack" alt="Backround" src="CCB.jpg" />     -->

<h1>Welcome to ONI1'S Cookie Clicker!</h1>

<img id="CCI" class="Cookie" src="/CC.png" alt="Cookie Jummy :)" on:click = {Clicks} on:keypress = {Clicks}/> 

<h2 id="cookieCount">Cookies: 0</h2>

<head>
  <style>
  body {
    background-color: #8b4513;
  }
  nav{
    background-color: blue;
  }
  </style>
</head>

<style>

/*.CookieBack {
  object-fit: cover;
  width: auto;
  height: auto; 
}  */


.Cookie {
    width: 350px;
    height: 350px;
    margin: auto;
    display: block;
    position: relative;
    bottom: -100px;
}

h1 {
    text-shadow: 3px 3px 3px black, 3px 3px 2px black;
    font-weight: bold;
    text-align: center;
    font-size: 50px;
    color: whitesmoke;
}

h2 {
    position: absolute;
    top: 70px;
    text-align: left;
    color: whitesmoke;
    text-shadow: 3px 3px 3px black, 3px 3px 2px black;

}
</style>