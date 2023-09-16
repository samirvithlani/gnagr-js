function onOverDemo() {
  document.getElementById("box1").innerHTML = "Mouse Over";
  document.getElementById("box1").className = "box11";
}
function onLeveDemo() {
  document.getElementById("box1").innerHTML = "Mouse Leave";
  document.getElementById("box1").className = "box1";
}

function onUpDemo() {
  //when you click on the box
  document.getElementById("box2").innerHTML = "Mouse Up";
  document.getElementById("box2").className = "box11";
}

function onEnterDemo() {
  document.getElementById("box3").innerHTML = "Mouse Enter";
}
function onOutDemo() {
  document.getElementById("box3").innerHTML = "Mouse Out";
}
function onScrollDemo() {
  console.log("Scrolling");
}
