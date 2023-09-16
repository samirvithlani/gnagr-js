function keyUpDemo() {
  //    console.log("keyUpDemo");
  var x = document.getElementById("name").value;
  console.log(x);
  document.getElementById("text").innerHTML = x;

  console.log(x.length);

  if (x.length > 5) {
    document.getElementById("nameerr").innerHTML = "More than 5";
    // console.log("More than 5");
  }
}
function checkAge() {
  var age = document.getElementById("age").value;
  console.log(age);
  console.log(typeof age);

  //convert x string to number using parseInt()

  var ageNum = parseInt(age);
  console.log(ageNum);
  console.log(typeof ageNum);
  if(ageNum<18){
    document.getElementById("ageerr").innerHTML = "Age should be more than 18";
  }
  else{
    document.getElementById("ageerr").innerHTML = "";
  }
}

function getFName(){

    var fname = document.getElementById("fname").value
    console.log(fname);
}
