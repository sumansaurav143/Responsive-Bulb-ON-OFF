// var Text = document.getElementById("Status");
// var Bulb = document.getElementById("bulb-img");

var Button =document.getElementById("btn");



// var Back = document.querySelector(".center");

// function glowBulb(){
//     if(Text.innerText=="DAY")
//     {
//         Text.innerText="NIGHT";
//         Text.style.color="white";
//         Bulb.src='pic_bulbon.gif';
//         Back.style.backgroundColor="black";
//         Button.innerText="OFF";
//     }
//     else
//     {
//         Text.innerText="DAY";
//         Bulb.src='pic_bulboff.gif';
//         Button.innerText="ON";
//         Back.style.backgroundColor="green";
//     }
// }

function glowBulb(){
    if(document.getElementById("Status").innerText=="DAY")
    {
        document.getElementById("Status").innerText="NIGHT";
        document.getElementById("Status").style.color="white";
        document.getElementById("bulb-img").src="pic_bulbon.gif";
        document.getElementsByClassName("center")[0].style.backgroundColor="black";
        document.getElementById("btn").innerText="OFF";
    }
    else
    {
        document.getElementById("Status").innerText="DAY";
        document.getElementById("Status").style.color="black";
        document.getElementById("bulb-img").src="pic_bulboff.gif";
        document.getElementsByClassName("center")[0].style.backgroundColor="green";
        document.getElementById("btn").innerText="ON";
    }
}

Button.addEventListener("click",()=>glowBulb());