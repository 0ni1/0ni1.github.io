<script>
  let CPC = 0;
  function Clicks(){
    CPC += 1;
    document.getElementById("cookieCount").innerHTML = "Cookies: " + CPC;
  }
</script>
<h1>Welcome to ONI1'S Cookie Clicker!</h1>
<img id="CCI" class="Cookie" src="/CC.png" alt="Cookie Jummy :)" on:click={Clicks} on:keypress={Clicks}/> 
<h2 id="cookieCount">Cookies: 0</h2>

     
<style>

.Cookie {
    width: 350px;
    height: 350px;
    margin: auto;
    display: block;
    position: relative;
    bottom: -100px;
}

h1 {
    text-shadow: 3px 3px 3px brown, 3px 3px 2px brown;
    font-weight: bold;
    text-align: center;
    font-size: 50px;
    color: whitesmoke;
}

h2 {
    position: absolute;
    top: 70px;
    text-align: left;
    color: brown;
    text-shadow: 3px 3px 3px burlywood, 3px 3px 2px burlywood;
}
</style>