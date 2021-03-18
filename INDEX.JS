var random1 =Math.floor(Math.random()*4)+1

var ranimg ="dice"+ random1+".png"
document.querySelectorAll("img")[0].setAttribute("src",ranimg)

var random2 =Math.floor(Math.random()*4)+1

var ranimg ="dice"+ random2+".png"
document.querySelectorAll("img")[1].setAttribute("src",ranimg)


if (random1>random2){

    document.querySelector("h1").innerHTML=("&#9971 Player 1 Wins &#9971")
    document.querySelector("h1").style.color="orange"
    



}
else if(random2>random1)
{
    document.querySelector("h1").innerHTML="&#9971 Player 2 Wins &#9971"
    document.querySelector("h1").style.color="orange"
}
else{

    document.querySelector("h1").innerHTML="&#9971 Draw &#9971"
}
