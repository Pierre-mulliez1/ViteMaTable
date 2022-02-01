//menu helper 

document.write(`
<div class = "menutop">
<a href = "index.html"  style = 'padding: 4px 6px'> <img class = "container_img" src="pictures/logo2.png" alt="logo" > </a>
<a href = "insert_rest.html" style = 'float:right;' class = "container_text">Your restaurant </a>
<button style = 'float:left;' class = "container_text" onclick="myPoplog();">User Log in </button>
</div>

<div class = "popup" id="windowpop"  style="margin-left: 20%;width:60%" >
<span class="popuptext_logs" id="myPoplog">
    <form action="" method="">
        <h5>Your username:</h5> <input type="text" name = "IA_name">
        <h5>Your password:</h5> <input type="text" id= "IA_process">
     </form>
     <button onclick="">Sign in</button>
     <button onclick="myPop00()">cancel </button>
</span>
<script>function myPoplog() {
    var popup = document.getElementById("myPoplog");
    if ( popup.classList.toggle === 'hide'){
    popup.classList.toggle("show");}
    else { popup.classList.toggle("show");}
  }
  </script>
</div>
`);

function loginout(){
    const img = document.querySelector('photo_avatar');
    if (document.querySelector("#textlog").innerHTML == "log in")
    {
        document.querySelector("#textlog").innerHTML = "log out";
        document.querySelector("#backgroundc").style.visibility = "hidden";
        document.querySelector("#backgroundc2").style.visibility = "hidden";
        document.querySelector("#user_name").style.display = "block";
    }
    else{
        document.querySelector("#textlog").innerHTML = "log in";
        document.querySelector("#backgroundc").style.visibility = "visible";
        document.querySelector("#backgroundc2").style.visibility = "visible";
        document.querySelector("#user_name").style.display = "none";
    }
}

function closeWin(id) {
    document.getElementById(id).style.display= "none";                   
 }