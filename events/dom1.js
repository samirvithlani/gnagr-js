function addText() {
  var p = document.getElementsByName("print");
  console.log(p);
  for (let i = 0; i < p.length; i++) {
    p[i].innerHTML = "Printed";
  }
}

function addColorToH1(){


    var h1 = document.getElementsByTagName("h1")
    for(i in h1){
        h1[i].style.color = "red";
    }
    console.log(h1);
}
