<script>
  import { src_url_equal } from "svelte/internal";

let CPC = 0; // Cookies Per Click
function cookieClicks(){
    CPC += 1;
    console.log(CPC)
}
</script>
<h1>Welcome to ONI1'S Cookie Clicker!</h1> <!--Title on Clicker page -->

<img id="CCI"class="Cookie" src="/CC.png" alt="Cookie Jummy :)"/> <!--Cookie picture -->

<main>
  <div>
      <h2>Cookies: {CPC}</h2>
      <button on:click={cookieClicks}>Button</button>
  </div>
</main>

<style>

.Cookie {
    width: 250px;
    height: 250px;
    margin: auto;
    display: block;
    position: relative;
    bottom: -100px;    
}
h1{
    text-shadow: 3px 3px 3px brown, 3px 3px 2px brown;
    font-weight: bold;
    text-align: center;
    font-size: 50px;
    color:whitesmoke;
}
h2{
  position: absolute;
  top: 70px;
  text-align: left;
  color: brown;
  text-shadow: 3px 3px 3px burlywood, 3px 3px 2px burlywood;
}
</style>
  