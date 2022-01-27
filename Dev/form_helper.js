//menu helper 

document.write(`
<div class = "menutop">
<a href = "index.html"  style = 'padding: 4px 6px'> <img class = "container_img" src="pictures/logo2.png" alt="logo" > </a>
<a href = "insert_rest.html" style = 'float:right;' class = "container_text">Your restaurant </a>
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