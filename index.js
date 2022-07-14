var rnd1 = Math.floor(Math.random()*6)+1;
var rnd2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+rnd1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+rnd2+".png");
if(rnd1>rnd2)
document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
else if(rnd2>rnd1)
document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
else
document.querySelector("h1").innerHTML="Draw!";
