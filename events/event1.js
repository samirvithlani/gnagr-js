var p = document.getElementById("print")
console.log(p.innerHTML)

var boxData = document.getElementById("box").innerHTML
console.log(boxData)

function buttonCall(){

    console.log("button clicked")
    document.getElementById("tech").innerHTML ="python"
}

function buttonCall2(){

    console.log("button clicked")
    document.getElementById("tech").style.color ="red"
    
}
function changeurl(){

    document.getElementById("google").innerHTML="facebook"
    document.getElementById("google").href="https://www.facebook.com/"
    
}

function changebox(){

    document.getElementById("b1").className="box1"


}