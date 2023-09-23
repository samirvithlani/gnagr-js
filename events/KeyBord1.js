function keyUpDemo(event) {
  //    console.log("keyUpDemo");

  //console.log(event);

  var x = document.getElementById("name").value;
  console.log(x);
  document.getElementById("text").innerHTML = x;

  console.log(x.length);

  if (x.length > 5) {
    document.getElementById("nameerr").innerHTML = "More than 5";
    // console.log("More than 5");
  }

  //check if control pressd or not if press send alert
  if (event.ctrlKey==true) {
    alert("Control Pressed");
  }
  //check key timing  and print in console
    console.log(event.timeStamp);
    //convert time to date
    var date=new Date(event.timeStamp);
    console.log(date);
  //which key pressed
  console.log(event.which);




}
function checkAge() {
  var age = document.getElementById("age").value;
  console.log(age);
  console.log(typeof age);

  //convert x string to number using parseInt()

  var ageNum = parseInt(age);
  console.log(ageNum);
  console.log(typeof ageNum);
  if (ageNum < 18) {
    document.getElementById("ageerr").innerHTML = "Age should be more than 18";
  } else {
    document.getElementById("ageerr").innerHTML = "";
  }
}

function getFName() {
  var fname = document.getElementById("fname").value;
  console.log(fname);
}
